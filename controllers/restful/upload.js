
var fs = require('fs'),
    path = require('path'),
    os = require('os');
var uuid = require('node-uuid');
var Grid = require('gridfs-stream');
var parse = require('co-busboy');
var mongoClient = require(process.cwd() + '/lib/core/mongoClient.js');

// var tasks = require(process.cwd() + '/lib/core/tasks.js');
var job = '';
module.exports = function (app, router) {
    router.get('/upload/:id', function *(next) {
        var gfs = Grid(mongoClient.connection.db, mongoClient.mongoose.mongo);
        var readstream = gfs.createReadStream({
            filename: this.params.id
        });
        this.set('Content-Type', 'image/jpeg');
        this.body = readstream;
    });
    router.post("/upload", function *(next) {
        var gfs = Grid(mongoClient.connection.db, mongoClient.mongoose.mongo);
        var prefix = uuid.v1();
        var parts = parse(this, {
            autoFields: true
          })
        var part
        var newfilename='';
        while (part = yield parts) {
            newfilename =prefix + '_' + part.filename.replace(/[ ]/g,"");
            if(part.filename.indexOf('.apk')>=0){
                newfilename = part.filename;
            }
            part.pipe(gfs.createWriteStream({ filename: newfilename }));
        }
        this.body={code:1,text:newfilename};
    });
    router.get('/release/app', function *(next) {
        var gfs = Grid(mongoClient.connection.db, mongoClient.mongoose.mongo);
        var readstream = gfs.createReadStream({
            filename: 'txjc.apk'
        });
        this.set('Content-Type', 'application/octet-stream');
        this.attachment('txjc.apk');
        this.body = readstream;
    });
    router.get('/release/appversion', function *(next) {
        var gfs = Grid(mongoClient.connection.db, mongoClient.mongoose.mongo);
        var readstream = gfs.createReadStream({
            filename: 'version.json'
        });
        this.set('Content-Type', 'application/json; charset=utf-8');
        this.body = readstream;
    });

    router.get('/start/orderFinishBatch', function *(next) {
        job = tasks.orderFinishBatch();
        this.body = '开始启动';
    });
    router.get('/stop/task', function *(next) {
        if(!job){
            this.body = '必须先启动';
        } else {
            job.cancel();
            this.body = '停止执行';
        }
    });

};
