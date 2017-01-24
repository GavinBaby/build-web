var knex = require(process.cwd() + '/clients/defaultMysqlClient').knex;
var cache = require(process.cwd() + '/clients/defaultCacheClient');
var comment = require(process.cwd() + '/models/table').comment;
var uuid = require('node-uuid');
var Promise = require("bluebird");
var moment = require('moment');
var util=  require(process.cwd() + '/clients/util');
module.exports =function (app) {
    var serviceImpl = {};
    // 注册
    serviceImpl.findComments = function (comment,page, callback) {
        var sql = 'SELECT A.*,B.NAME FROM COMMENT A LEFT JOIN BUILD  AS B ON A.MAIN_ID = B.ID WHERE 1=1 ';
        if(comment.name ){
            sql += ' and name like %'+comment.name+'% ';
        }
        if(comment.body ){
            sql += ' and body like %'+comment.body+'% ';
        }
        if(comment.op ){
            sql += ' and op like %'+comment.op+'% ';
        }
        if(comment.level ){
            sql += ' and level ='+comment.level;
        }
        if(comment.fdate ){
            sql += ' and fdate like %'+comment.fdate+'% ';
        }
        if(comment.state ){
            sql += ' and state ='+comment.state;
        }
        if(page.sortName=='0'){
            page.sortName ='fdate'
            page.sortType ='desc'
        }
        var totalSize = sql.replace('A.*,B.NAME','COUNT(A.ID) as totalSize');
        knex.raw(totalSize).then(function (success) {
            totalSize = success[0][0].totalSize;
             util.doPageRaw(page, sql);
            return knex.raw(sql);
        }).then(function (lists) {
            callback(null,new CommentList({data:lists,totalSize:totalSize}));
        }).catch(function (err) {
            callback(null, new Back({code:500 ,text:"系统错误"}));
        });
    };

    return {
        serviceImplementation: serviceImpl
    };
};