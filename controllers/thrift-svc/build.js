var knex = require(process.cwd() + '/clients/defaultMysqlClient').knex;
var cache = require(process.cwd() + '/clients/defaultCacheClient');
var build = require(process.cwd() + '/models/table').build;
var uuid = require('node-uuid');
var Promise = require("bluebird");
var moment = require('moment');
var util=  require(process.cwd() + '/clients/util');

module.exports =function (app) {
    var serviceImpl = {};
    // 注册
    serviceImpl.findBuilds = function (build,page, callback) {
        var sql = knex.select().from('build');
        if(build.name ){
            sql.where('name', 'like','%'+build.name+'%');
        }
        if(build.sort ){
            sql.where('sort',build.name);
        }
        if(build.address ){
            sql.where('address', 'like','%'+build.address+'%');
        }
        if(build.op ){
            sql.where('address',build.op );
        }
        if(build.op_time ){
            sql.where('op_time',build.op_time );
        }
        if(build.state ){
            sql.where('state',build.state );
        }
        if(page.sortName=='0'){
            page.sortName ='state'
            page.sortType ='acs'
        }
        var totalSize = '';
        var sqlSize = sql.clone();
        sqlSize.count('id as totalSize').then(function (success) {
            totalSize = success[0].totalSize;
            util.doPage(page, sql);
            return sql;
        }).then(function (lists) {
            callback(null,new BuildList({data:lists,totalSize:totalSize}));
        }).catch(function (err) {
            callback(null, new Back({code:500 ,text:"系统错误"}));
        });
    };

    serviceImpl.findBuild  = function (id,  callback) {
        var build  ;
        knex.select().from('build').where('id',id).then(function (success) {
            build = new Build(success[0]);
            return knex.select().from('build_detail').where('main_id',id)
        }).then(function (success) {
            build.details=success;
            callback(null,build);
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

    return {
        serviceImplementation: serviceImpl
    };
};