var knex = require(process.cwd() + '/clients/defaultMysqlClient').knex;
var cache = require(process.cwd() + '/clients/defaultCacheClient');
var comment = require(process.cwd() + '/models/table').comment;
var uuid = require('node-uuid');
var Promise = require("bluebird");
var moment = require('moment');

module.exports =function (app) {
    var serviceImpl = {};
    // 注册
    serviceImpl.findComments = function (comment, callback) {
        // 定义返回值
    };

    return {
        serviceImplementation: serviceImpl
    };
};