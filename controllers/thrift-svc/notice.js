var knex = require(process.cwd() + '/clients/defaultMysqlClient').knex;
var cache = require(process.cwd() + '/clients/defaultCacheClient');
var notice = require(process.cwd() + '/models/table').notice;
var uuid = require('node-uuid');
var Promise = require("bluebird");
var moment = require('moment');
var util=  require(process.cwd() + '/clients/util');
module.exports =function (app) {
    var serviceImpl = {};
    // 注册
    serviceImpl.findNotices = function (notice,page,callback) {
        var sql = knex.select().from('notice');
        if(notice.name ){
            sql.where('title', 'like','%'+notice.title+'%');
        }
        if(notice.type ){
            sql.where('sort',notice.type);
        }
        if(notice.op_time ){
            sql.where('op_time', 'like','%'+notice.op_time+'%');
        }
        if(notice.state ){
            sql.where('state',notice.state );
        }
        if(page.sortName=='0'){
            page.sortName ='op_time'
            page.sortType ='desc'
        }
        var totalSize = '';
        var sqlSize = sql.clone();
        sqlSize.count('id as totalSize').then(function (success) {
            totalSize = success[0].totalSize;
            util.doPage(page, sql);
            return sql;
        }).then(function (lists) {
            callback(null,new NoticeList({data:lists,totalSize:totalSize}));
        }).catch(function (err) {
            callback(null, new Back({code:500 ,text:"系统错误"}));
        });
    };

    return {
        serviceImplementation: serviceImpl
    };
};