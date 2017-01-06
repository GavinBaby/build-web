'use strict';

var Application = require(process.cwd() + '/lib/core/application');
var mysqlClient = require('./clients/defaultMysqlClient');
var sharedConfig = require(process.cwd() + '/configs/config.js');
var buildSvc = require(process.cwd() + '/thrift/gen/buildSvc.js');
var mongoClient = require('./lib/core/mongoClient.js');
class MainApplication extends Application {
    onStart () {
        // mongoClient.initialize(sharedConfig.mongo.query_db_full_conn_string);
        // this.attachApplication('auth');
        // this.attachApplication('txjc-service');
        // this.attachApplication('common');
        this.sharedConfig = sharedConfig;
    }

    onUpdateConfig (config) {
        //mysqlClient.initialize(config.mysql);
        //cacheClient.initialize(config.redis);
    }

    onInitNewRequest (context) {
        console.log(context.originalUrl )
        this.attachThriftClient('build', context , this.sharedConfig.buildClientUrl , buildSvc);
    }
}

var app = module.exports = new MainApplication();
// var tasks = require(process.cwd() + '/lib/core/tasks.js');
// tasks.orderFinishBatch();
if (module.parent === null) {
    mysqlClient.initialize(sharedConfig.mysql);
    console.log(1 )
    app.run(process.env.PORT || 3000);
    console.log(2 )
    //app.run(process.env.PORT || 3100);
}