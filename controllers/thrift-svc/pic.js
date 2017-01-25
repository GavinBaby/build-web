var knex = require(process.cwd() + '/clients/defaultMysqlClient').knex;
var cache = require(process.cwd() + '/clients/defaultCacheClient');
var pic_t = require(process.cwd() + '/models/table').pic;
var sort_t = require(process.cwd() + '/models/table').sort;
var uuid = require('node-uuid');
var Promise = require("bluebird");
var moment = require('moment');
var util=  require(process.cwd() + '/clients/util');
var bookshelf = require(process.cwd() + '/clients/defaultMysqlClient').bookshelf;

module.exports =function (app) {
    var serviceImpl = {};
    // 注册
    serviceImpl.findPics = function (pic, callback) {
    };


    serviceImpl.findSorts  = function (sort,page, callback) {
        var sql = knex.select().from('sort');
        if(sort.name ){
            sql.where('name', 'like','%'+sort.name+'%');
        }
        // if(page.sortName=='0'){
        page.sortName ='name'
        page.sortType ='acs'
        // }
        var totalSize = '';
        var sqlSize = sql.clone();
        sqlSize.count('name as totalSize').then(function (success) {
            totalSize = success[0].totalSize;
            util.doPage(page, sql);
            return sql;
        }).then(function (lists) {
            callback(null,new SortList({data:lists,totalSize:totalSize}));
        }).catch(function (err) {
            callback(null, new Back({code:500 ,text:"系统错误"}));
        });
    }

    serviceImpl.saveSort  = function (sort, callback) {
        var type = 1;
        if (!sort.id) {
            sort.id=uuid.v1();
            sort.state = 1;
        } else {
            type = 0;
        }
        sort.op_time = moment().format('YYYY-MM-DD HH:mm:ss');
        sort_t.query('name').where('name',sort.name).andWhere('id','!=',sort.id).then(function (reply) {
            if(reply.length>0){
                callback(null, {code: 500, text: "分类已存在"});
            }else{
                bookshelf.transaction(function (t) {
                    var sql;
                    if (type == 0) {
                        sql = sort_t.query().update(sort).where('id', sort.id).transacting(t)
                    } else {
                        sql = sort_t.query().insert(sort).transacting(t)
                    }
                    sql.then(function (reply) {
                        callback(null, {code: 1, text: "保存成功"});
                    })
                }).catch(function (err) {
                    callback(null, {code: 500, text: "系统错误"});
                })
            }
        }).then(function (reply) {
            callback(null, {code: 500, text: "系统错误"});
        })
    }
    return {
        serviceImplementation: serviceImpl
    };
};