'use strict';
var qiniu = require('qiniu');
var config = require(process.cwd() + '/configs/config.js');
qiniu.conf.ACCESS_KEY = config.ACCESS_KEY;
qiniu.conf.SECRET_KEY = config.SECRET_KEY;
var uptoken = new qiniu.rs.PutPolicy(config.Bucket_Name);
var fs = require('fs'),
    path = require('path'),
    os = require('os');
var uuid = require('node-uuid');
var koaBody = require('koa-body');
// var Grid = require('gridfs-stream');
// var parse = require('co-busboy');
// var mongoClient = require(process.cwd() + '/lib/core/mongoClient.js');

// var tasks = require(process.cwd() + '/lib/core/tasks.js');
var job = '';
module.exports = function (app, router) {
    // router.get('/upload/:id', function *(next) {
    //     var gfs = Grid(mongoClient.connection.db, mongoClient.mongoose.mongo);
    //     var readstream = gfs.createReadStream({
    //         filename: this.params.id
    //     });
    //     this.set('Content-Type', 'image/jpeg');
    //     this.body = readstream;
    // });
    // router.post("/upload", function *(next) {
    //     var gfs = Grid(mongoClient.connection.db, mongoClient.mongoose.mongo);
    //     var prefix = uuid.v1();
    //     var parts = parse(this, {
    //         autoFields: true
    //       })
    //     var part
    //     var newfilename='';
    //     while (part = yield parts) {
    //         newfilename =prefix + '_' + part.filename.replace(/[ ]/g,"");
    //         if(part.filename.indexOf('.apk')>=0){
    //             newfilename = part.filename;
    //         }
    //         part.pipe(gfs.createWriteStream({ filename: newfilename }));
    //     }
    //     this.body={code:1,text:newfilename};
    // });
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

    // router.get('/start/orderFinishBatch', function *(next) {
    //     job = tasks.orderFinishBatch();
    //     this.body = '开始启动';
    // });
    // router.get('/stop/task', function *(next) {
    //     if(!job){
    //         this.body = '必须先启动';
    //     } else {
    //         job.cancel();
    //         this.body = '停止执行';
    //     }
    // });


    router.get('/uptoken', function *(next) {
        var token = uptoken.token();
        this.body = {uptoken: token};
    });



    router.post('/qiniu/upload', koaBody(), function *(next) {
        var key = uuid.v1();
        var busboy = new Busboy({headers: this.headers});
        var filePath = '';
        var self = this;
        busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
            filePath = process.cwd() + '/public/upload/' + key;
            file.pipe(fs.createWriteStream(filePath));
            file.on('data', function (data) {
            });
            file.on('end', function () {
            });
        });
        this.req.pipe(busboy);
        yield new Promise(function (resolve, reject) {
            busboy.on('finish', function () {
                upqiniuFile(filename, filePath, function () {
                    resolve();
                });
            });
        });
        self.body = {code: 1, text: key};
    });
};

var upqiniuFile = function (key, file, callback) {
    qiniu.io.putFile(uptoken.token(), key, file, extra, function (err, ret) {
        if (!err) {
            // 上传成功， 处理返回值

        } else {
            console.log(err)
        }
        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
        }
        callback();
    });
};

var upqiniuBuf = function (key, file, path, callback) {
    qiniu.io.put(uptoken.token(), key, file, extra, function (err, ret) {
        if (!err) {
            // 上传成功， 处理返回值
            console.log(ret.key, ret.hash);

        } else {
            // 上传失败， 处理返回代码
            console.log(err)
        }
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }
        if (callback) {
            callback();
        }
    });
};