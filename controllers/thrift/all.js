var _ = require('underscore');
var auth = require('../thrift-svc/auth')();

module.exports = function (app) {
    var serviceImpl = {};
    serviceImpl = _.extend(serviceImpl, auth.serviceImplementation);
    return {
        endPoint: '/build',
        serviceDefinition: '/thrift/gen/buildSvc',
        serviceImplementation: serviceImpl
    };
};