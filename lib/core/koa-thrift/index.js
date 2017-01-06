'use strict';

var url = require("url");
var thrift = require('thrift');
var fs = require('fs');
var _ = require('underscore');


let allServices = {};

var loadServices = function (subDir, subUrl, app) {
    var subDir = subDir || '';
    var subUrl = subUrl || '';
    let services = {};
    var servicePath = process.cwd() + subDir + '/controllers/thrift/';
    try {
        if (fs.existsSync(servicePath)) {
            fs.readdirSync(servicePath).forEach(function (file) {
                var service = require(servicePath + file)(app);
                var endPoint = subUrl + service.endPoint;
                service.serviceDefinition = require(process.cwd() + subDir + service.serviceDefinition);
                delete service.endPoint;
                allServices[endPoint] = service;
                services[endPoint] = service;
            });
        }
    } catch (err) {
        console.log(err);
    }
    return services;
};

var createHttpServer = function(options, app) {
    options = options || {};
    let services = loadServices(options.subDir, options.subUrl, app);
    for (let url in services) {
        var svcObj = services[url];
        // Setup the processor
        if (svcObj.serviceDefinition instanceof thrift.MultiplexedProcessor) {
            svcObj.serviceDefinition = svcObj.serviceDefinition;
        } else {
            // For historical reasons Node.js supports processors passed in directly or via the
            //  IDL Compiler generated class housing the processor. Also, the options property
            //  for a Processor has been called both cls and processor at different times. We
            //  support any of the four possibilities here.
            var processor = (svcObj.serviceDefinition) ? (svcObj.serviceDefinition.Processor || svcObj.serviceDefinition) :
                (svcObj.cls.Processor || svcObj.cls);
            // Processors can be supplied as constructed objects with handlers already embeded,
            //  if a handler is provided we construct a new processor, if not we use the processor
            //  object directly
            if (svcObj.serviceImplementation) {
                svcObj.serviceDefinition = new processor(svcObj.serviceImplementation);
            } else {
                svcObj.serviceDefinition = processor;
            }
        }
    }

    ////Verify CORS requirements
    //function VerifyCORSAndSetHeaders(req, res) {
    //    if (req.headers.origin && options.cors) {
    //        if (options.cors["*"] || options.cors[req.headers.origin]) {
    //            res.setHeader("access-control-allow-origin", req.headers.origin);
    //            res.setHeader("access-control-allow-methods", "GET, POST, OPTIONS");
    //            res.setHeader("access-control-allow-headers", "content-type, accept");
    //            res.setHeader("access-control-max-age", "60");
    //            return true;
    //        } else {
    //            return false;
    //        }
    //    }
    //    return true;
    //}


    return function* (next) {
        var req = this.req;
        var res = this.res;
        //Lookup service
        var url_ = url.parse(req.url).pathname;
        var svc = allServices[url_];
        if (!svc || !(req.method.toLowerCase() === 'post')) {
            yield next;
            return;
        }

        var Transport = thrift.TBufferedTransport;
        var Protocol = thrift.TJSONProtocol;
        if (this.query.t && (this.query.t === '1')) {
            Transport = thrift.TFramedTransport
        }
        if (this.query.p && (this.query.p === '1')) {
            Protocol = thrift.TBinaryProtocol;
        }
        ////Verify CORS requirements
        //if (!VerifyCORSAndSetHeaders(req, res)) {
        //  res.writeHead("403", "Origin " + req.headers.origin + " not allowed", {});
        //  res.end();
        //  return;
        //}
        var context = this;
        _.extend(context, svc.serviceDefinition);
        _.extend(context.__proto__, svc.serviceDefinition.__proto__);


        var thriftProcess = new Promise((resolve, reject) => {
            // Process XHR payload
            req.on('data', Transport.receiver(function(transportWithData) {
                var input = new Protocol(transportWithData);
                var output = new Protocol(new Transport(undefined, function(buf) {
                    try {
                        res.writeHead(200);
                        res.end(buf);
                        resolve(null);
                    } catch (err) {
                        res.writeHead(500);
                        res.end();
                        reject(err);
                    }
                }));

                try {
                    svc.serviceDefinition.process.call(context, input, output);
                    transportWithData.commitPosition();
                } catch (err) {
                    if (err.name === 'TTransport.InputBufferUnderrunError') {
                        transportWithData.rollbackPosition();
                    } else {
                        res.writeHead(500);
                        res.end();
                    }
                    reject(err);
                }
            }));
        });
        yield thriftProcess;
    };
};


module.exports = thrift;
module.exports.createHttpServer = createHttpServer;
module.exports.createHttpClientInner = module.exports.createHttpClient;
module.exports.createHttpClient = require('./httpClient').createHttpClient;