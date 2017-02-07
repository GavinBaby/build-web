var Promise = require("bluebird");
var cache = require(process.cwd() + '/clients/defaultCacheClient');
var urlencode =require('urlencode');
var config = require(process.cwd() +'/configs/config.js');
var md5 = require('md5');
var knex = require(process.cwd() + '/clients/defaultMysqlClient').knex;
module.exports = function (app) {
    var serviceImpl = {};


    // 发送手机验证码
    serviceImpl.getCode = function (phone, callback) {
        // 生成6位验证码
        var extend_code = "";
        for (var i = 0; i < 6; i++) {
            extend_code += Math.floor(Math.random() * 10);
        }
        // 将验证码保存到缓存中 20分钟
        cache.setex('token', phone, 3600 * 60 * 20, extend_code);
        var msgtext = '您的验证码是' + extend_code + ',如非本人操作请忽略本短信。';
        // 发送短信
        serviceImpl.sendMobile(phone, msgtext, callback);
    };

    serviceImpl.sendMobile = function (phone,msgtext, callback) {
        var mobileUser = config.mobileUser ;
        var mobilePassword =md5(config.mobilePassword).toUpperCase()  ;
        msgtext = urlencode(msgtext,'gb2312');
        var allUrl = config.mobileUrl+'cpid='+mobileUser +'&cppwd='+mobilePassword+'&phone='+ phone+'&msgtext='+ msgtext + '&encode=UTF-8' ;
        console.log(allUrl);
        var request = require('request');
        request({
            uri: allUrl,
            method: 'GET'
        }, function (err, response, body) {
            if (err)
                callback(null,new Back({code:500,text:err}));
            else{
                callback(null,new Back({code:1,text:'发送成功'}));
            }
        });
    };
    return {
        serviceImplementation: serviceImpl
    };
};