/**
 * Created by cd on 2015/11/13.
 */
var querystring = require('querystring');

module.exports = function (app, router) {
    router.get('/', function *(next) {
        if(this.user){
            var dayNames = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
            var Stamp = new Date();
            this.user.mm_dd = (Stamp.getMonth() + 1) +"月"+Stamp.getDate()+ "日";
            this.user.Week = dayNames[Stamp.getDay()];
            this.redirect('/index',this.user);
        }else{
            this.body = yield app.render('/login',{code:0,text:''});
        }
    });
    //登入页面
    router.get('/login',  function *(next) {
        this.body = yield app.render('/login',{code:0,text:''});
    });
    //首页
    router.get('/index',  function *(next) {
        var dayNames = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
        var Stamp = new Date();
        this.user.mm_dd = (Stamp.getMonth() + 1) +"月"+Stamp.getDate()+ "日";
        this.user.Week = dayNames[Stamp.getDay()];
        this.body = yield app.render('/index', this.user);
    });
    router.get('/buildP', function *(next) {
        this.body = yield app.render('buildP' );
    });
    router.get('/buildP_detail', function *(next) {
        var id = this.query.id||'';
        this.body = yield app.render('buildP_detail',{id:id} );
    });
    router.get('/buildM', function *(next) {
        this.body = yield app.render('buildM' );
    });

    router.get('/commentP', function *(next) {
        this.body = yield app.render('commentP' );
    });
    router.get('/commentM', function *(next) {
        this.body = yield app.render('commentM' );
    });
    router.get('/sort', function *(next) {
        this.body = yield app.render('sort' );
    });
    router.get('/notice', function *(next) {
        this.body = yield app.render('notice' );
    });
    router.get('/pic', function *(next) {
        this.body = yield app.render('pic' );
    });
    router.get('/account', function *(next) {
        this.body = yield app.render('account' );
    });



};