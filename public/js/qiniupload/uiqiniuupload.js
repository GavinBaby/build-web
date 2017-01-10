/**
 * Created by anuode on 2015/3/18.
 */
var Domain ='http://ojaeg242y.bkt.clouddn.com/';
var upFile = {
    //provider : true,  // 标示上传本地还是七牛服务器
    //url : 'container', // 本地存储文件操作路径
    //domain : 'http://qiniu-plupload.qiniudn.com/',// 上传服务器地址
    //maxSize : '100mb',//文件最大长度
    /***
     * @param containerId 上传区域id
     * @param pickId    上传按钮id
     * @param displayId   显示区域id
     * @param url         url
     * @param maxSize     上传文件大小
     * @param upComplete  上传结束时函数
     */
    upPic: function (filename_type, pickId, displayId, callback) {
        var uploader = storage.uploader({
            //headers:{
            //    Accept:'text/plain'
            //},
            runtimes: 'html5,html4',
            browse_button: pickId,
            displayId: displayId,
            //container: containerId,
            //drop_element: containerId,
            max_file_size: '100mb',
            dragdrop: true,
            uptoken_url: '/uptoken',   // 只用于七牛
            isimg:true,
            provider: 'qiniu',
            filename_type: filename_type,
            domain: Domain,  // 只用于本地
            //url: upFileConfig.localurl,   // 只用于本地
            max_retries: 2,
            auto_start: true,
            init: {
                'FilesAdded': function (up, files) {

                },
                'BeforeUpload': function (up, file) {
                    //
                    //console.log('BeforeUpload');
                    //var progress = new FileProgress(file, displayId);
                    //var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
                    //if (up.runtime === 'html5' && chunk_size) {
                    //    progress.setChunkProgess(chunk_size);
                    //}
                },
                'UploadProgress': function(up, file) {
                    var progress = new FileProgress(file, displayId);
                    var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
                    progress.setProgress(file.percent + "%", up.total.bytesPerSec, chunk_size);

                },
                'UploadComplete': function (up, file) {

                },

                'FileUploaded': function(up, file, info) {

                    if (typeof info == "string") {
                        var progress = new FileProgress(file, displayId);
                        var progressid =  progress.setComplete(up, info,file);
                        up.progressid=progressid;
                        callback(up, info, displayId);
                    }
                },

                'Error': function (up, err, errTip) {
                    alert(errTip);
                }
            }
        });
    }
}


var storage = new (function () {
    this.uploader = function (op) {
        op = op || {};
        op.chunk_size = '0.5mb';
        return Qiniu.uploader(op);
    }
})();

// A more compact, but less performant, RFC4122v4 solution:
var uuid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};


var fileUploadInit = function (o) {
    var fixed = o.fixed || {};    // 固定图片
    this.addfixed = function (o) {
        //分组上传  addpic 就是 +
        var pickId = o.pickId;
        var displayId = o.displayId;
        fixed[displayId] = {pickId: pickId, field: o.field, key: o.key};
        if (o.callback) {
            upFile.upPic(o.filename_type, pickId, displayId, o.callback);
        }
    }
}

