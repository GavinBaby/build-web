var _ = require('underscore');


module.exports = function (app) {
    var serviceImpl = {};
    var auth = require('../thrift-svc/auth')(app);
    var build = require('../thrift-svc/build')(app);
    var comment = require('../thrift-svc/comment')(app);
    var notice = require('../thrift-svc/notice')(app);
    var pic = require('../thrift-svc/pic')(app);
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