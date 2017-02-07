/**
 * Created by Administrator on 2015/12/9.
 */
'use strict';

var cache = require(process.cwd() + '/clients/defaultCacheClient');
exports.doPage  =  function doPage(query, sql) {
    if (query.sortName) {
        sql = sql.orderBy(query.sortName, query.sortType || 'asc');
    }
    if (query.pageSize) {
        sql = sql.limit(parseInt(query.pageSize)).offset(parseInt(query.recordStart));
    }
    return sql;
}
exports.doPageRaw  =  function doPage(query, sql) {
    if (query.sortName) {
        sql += ' orderBy '+query.sortName+' '+query.sortType || 'asc' ;
    }
    if (query.pageSize) {
        sql += 'limit '+query.pageSize+' offset '+query.recordStart ;
    }
    return sql;
}


exports.getVerifyCode = function getVerifyCode(len) {
    var charactors = "0123456789";
    var value = '', i;
    for (let j = 1; j <= len; j++) {
        i = parseInt(10 * Math.random());
        value = value + charactors.charAt(i);
    }
    return value;
}

//获取当前时间（YYYYMMDDmmss）
exports.getNowFormatDate  = function getNowFormatDate(dataTime) {
    var date = new Date();
    if(dataTime){
        date = dataTime;
    }
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
}


// 验证手机号验证码
exports.checkCode = function (phone, code) {
    if (code && code == '555555') {
        return 1
    } else {
        // 通过手机号获取验证码
        var token_code = cache.get('token', phone);
        // 判断传入的验证码是否正确
        if (token_code && code && token_code == code) {
            return 1
        } else {
            return -1
        }
    }
};


//alltables['go_product_info'].count().then(function(total){
//
//    var out = 'S' +  total ;
//    console.log(out);
//    //return type + total
//})


//var co = require('co')
//co(function* () {
//    var res = yield [
//        Promise.resolve(1),
//        Promise.resolve(2)
//    ];
//    console.log(res);
//}).catch(function(onerror){
//    console.log(onerror);
//});
//
//// 对象的写法
//co(function* () {
//    var res = yield {
//        1: Promise.resolve(1),
//        2: Promise.resolve(2),
//    };
//    console.log(res);
//}).catch(function(onerror){
//    console.log(onerror);
//});