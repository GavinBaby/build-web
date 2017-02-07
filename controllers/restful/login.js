'use strict';
var koaBody = require('koa-body');
var crypto = require('crypto');
var http = require('http');
var co = require('co');

var Promise = require('bluebird');
module.exports = function (app, router) {

    router.post('/login',koaBody(), function *(next) {
        var user  = this.request.body;
        var account=new Account({mobile:user.username,password:user.password });
        var result = yield this.thriftClients.build.login(account);
        if(result.back.code == 1){
            // var result1 = yield this.thriftClients.txjc.getRole(result.account._id);
            // result.account.role_name = result1.role_name
            var dayNames = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
            var Stamp = new Date();
            result.mm_dd = (Stamp.getMonth() + 1) +"月"+Stamp.getDate()+ "日";
            result.Week = dayNames[Stamp.getDay()];
            app.loginSuccess(this,result);
            this.body = yield app.render('index',result);
        }else{
            this.body = yield app.render('/login',result.back);
        }
    });

    router.get('/logout',  function *(next) {
        app.logout(this);
        this.cookies.set('currentPage', -1 );
        this.body = yield app.render('/login',{code:0,text:""});
    })


    router.get('/db',  function *(next) {
        var self =this;
        var ret;
        var mailNo = this.request.query.mailNo;
        var param = {
            "logisticCompanyID":"deppontest",
            "orders":
                [
                    {"mailNo":mailNo}
                ]
        }
        var date = new Date().getTime() ;
        var content = JSON.stringify(param)+'deppontest'+date
        var query = 'companyCode=TXJC&params='+JSON.stringify(param)+'&digest='+jm(content)+'&timestamp='+date;
        // class DB {
        //     *getinfo(query){
        //         co(function* (next) {
        //             http.get("http://58.40.17.67/dop/order/traceOrder.action?" + query, function (reshtpp) {
        //                 reshtpp.on('data', function (message) {
        //                     ret = eval('(' + message + ')');
        //                     self.body = ret;
        //                 });
        //             }).on('error', function (e) {
        //                 next();
        //             });
        //         })
        //     };
        // }
        // yield  new DB().getinfo(query)
        var getdb =  function* (query) {
            var test = new Promise((resolve, reject) => {
                // Process XHR payload
                http.get("http://58.40.17.67/dop/order/traceOrder.action?" + query, function (reshtpp) {
                    reshtpp.on('data', function (message) {
                        ret = eval('(' + message + ')');
                        // resolve(ret);
                        self.body = ret;
                    });
                }).on('error', function (e) {
                    reject(e)
                });
            });
            yield test;
        }
        this.body = yield getdb(query);
        // this.body = 1;
        // co(function* () {
        //     try {
        //         yield  new DB().getinfo(query,this,next);
        //     } catch (err) {
        //         console.log(err);
        //     }
        // });
        //  yield  new DB().getinfo(query,this,next);
        // function getdb(query) {

        // }
    })



};
//德邦

function  jm(content) {
    var md5 = crypto.createHash('md5');
    md5.update(content);
    var d = md5.digest('hex')
    var b = new Buffer(d);
    return  b.toString('base64');
}


