var knex = require(process.cwd() + '/clients/defaultMysqlClient').knex;
var cache = require(process.cwd() + '/clients/defaultCacheClient');
var pic = require(process.cwd() + '/models/table').pic;
var uuid = require('node-uuid');
var Promise = require("bluebird");
var moment = require('moment');

module.exports =function (app) {
    var serviceImpl = {};
    // 注册
    serviceImpl.findPics = function (pic, callback) {
    };

    return {
        serviceImplementation: serviceImpl
    };
};