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
    serviceImpl.findPics = function (pic,page, callback) {
        var sql = knex.select().from('pic');
        if(pic.title ){
            sql.where('title', 'like','%'+pic.title+'%');
        }
        if(pic.op_time ){
            sql.where('op_time', 'like','%'+pic.op_time+'%');
        }
        if(pic.state ){
            sql.where('state',pic.state );
        }
            page.sortName ='op_time'
            page.sortType ='desc'
        var totalSize = '';
        var sqlSize = sql.clone();
        sqlSize.count('id as totalSize').then(function (success) {
            totalSize = success[0].totalSize;
            util.doPage(page, sql);
            return sql;
        }).then(function (lists) {
            callback(null,new PicList({data:lists,totalSize:totalSize}));
        }).catch(function (err) {
            callback(null, new Back({code:500 ,text:"系统错误"}));
        });
    }


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
            sort.state = 1;
        } else {
            type = 0;
        }
        sort.op_time = moment().format('YYYY-MM-DD HH:mm:ss');
        sort_t.query().select('name').where('name',sort.name).andWhere('id','!=',sort.id).then(function (reply) {
            if(reply.length>0){
                throw {code: -1, text: "分类已存在"} ;
            }else{
                if (type == 0) {
                    return sort_t.query().update(sort).where('id', sort.id);
                } else {
                    return sort_t.query().insert(sort);
                }
            }
        }).then(function (reply) {
            callback(null, {code: 1, text: "保存成功"});
        }).catch(function (err) {
            if(err.code){
                callback(null, err);
            }else{
                callback(null, {code: 500, text: "系统错误"});
            }
        })
    }
    return {
        serviceImplementation: serviceImpl
    };
};