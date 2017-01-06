var knex = require(process.cwd() + '/clients/defaultMysqlClient').knex;
var cache = require(process.cwd() + '/clients/defaultCacheClient');
var notice = require(process.cwd() + '/models/table').notice;
var uuid = require('node-uuid');
var Promise = require("bluebird");
var moment = require('moment');

module.exports =function (app) {
    var serviceImpl = {};
    // 注册
    serviceImpl.findNotices = function (notice, callback) {
    };

    return {
        serviceImplementation: serviceImpl
    };
};