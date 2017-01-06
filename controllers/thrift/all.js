var _ = require('underscore');
var auth = require('../thrift-svc/auth')();
var build = require('../thrift-svc/build')();
var comment = require('../thrift-svc/comment')();
var notice = require('../thrift-svc/notice')();
var pic = require('../thrift-svc/pic')();

module.exports = function (app) {
    var serviceImpl = {};
    serviceImpl = _.extend(serviceImpl, auth.serviceImplementation);
    serviceImpl = _.extend(serviceImpl, build.serviceImplementation);
    serviceImpl = _.extend(serviceImpl, comment.serviceImplementation);
    serviceImpl = _.extend(serviceImpl, notice.serviceImplementation);
    serviceImpl = _.extend(serviceImpl, pic.serviceImplementation);
    return {
        endPoint: '/build',
        serviceDefinition: '/thrift/gen/buildSvc',
        serviceImplementation: serviceImpl
    };
};