var thrift = require('thrift');
var URL = require('url');

module.exports.createHttpClient = function (url, service, options, errCallback) {
   var parsedUrl = URL.parse(url);
   options = options || {};
   var thriftOption = {};
   options.protocolType = options.protocolType || 1;
   thriftOption.transport = options.transportType == 1 ? thrift.TFramedTransport : thrift.TBufferedTransport;
   thriftOption.protocol = options.protocolType == 1 ? thrift.TBinaryProtocol : thrift.TJSONProtocol;
   thriftOption.path = parsedUrl.path;

   if (options.transportType === 1) {
      thriftOption.path += '?t=1';
      if (options.protocolType === 1) {
         thriftOption.path += '&p=1';
      }
   } else if (options.protocolType === 1) {
      thriftOption.path += '?p=1';
   }

   thriftOption.headers = options.headers || {};
   thriftOption.headers.Connection = 'close';
   var connection = thrift.createHttpConnection(parsedUrl.hostname, parsedUrl.port, thriftOption);
   if (errCallback) {
      connection.on('error', errCallback);
   }
   var client = thrift.createHttpClientInner(service, connection);

   return client;
};


