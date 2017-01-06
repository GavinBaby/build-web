var schedule = require('node-schedule');
var txjcSvc = require(process.cwd() +'/thrift/gen/txjcSvc.js');
var thrift = require(process.cwd() +'/lib/core/koa-thrift');
var scheduleExecte = function () {
    this.orderFinishBatch  = function(){

        var rule = new schedule.RecurrenceRule();
        rule.hour = [];
        // rule.minute = 0;
        // rule.minute = [1];
        // rule.second =  [ ];
        for( var i=0 ;i< 24 ; i=i+4){
           rule.hour.push(i);
        }
        var j=  schedule.scheduleJob(rule, function(){
           var client = thrift.createHttpClient('http://127.0.0.1/txjc-service/txjc', txjcSvc, {headers: {authorization: 'Bearer 1234'}});
           client.orderFinishBatch( function(error, result) {
              console.log("Msg from server: " + result.code);
           });
        });
        return j;
    }


}
module.exports   = new scheduleExecte();