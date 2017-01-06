var querystring= require('querystring');
module.exports = function (app, router) {
    router.get('/findBuilds',  function *(next) {
        var parms = querystring.parse(this.req._parsedUrl.query);
        var page = new Page(parms);
        var build = new Build(parms);
        var result = yield this.thriftClients.build.findBuilds(build,page);
        this.body = result;
    });
    router.get('/findComments',  function *(next) {
        var parms = querystring.parse(this.req._parsedUrl.query);
        var page = new Page(parms);
        var comment = new Comment(parms);
        var result = yield this.thriftClients.build.findComments(comment,page);
        this.body = result;
    });
    router.get('/findNotices',  function *(next) {
        var parms = querystring.parse(this.req._parsedUrl.query);
        var page = new Page(parms);
        var notice = new Notice(parms);
        var result = yield this.thriftClients.build.findNotices(notice,page);
        this.body = result;
    });
    router.get('/findSorts',  function *(next) {
        var parms = querystring.parse(this.req._parsedUrl.query);
        var page = new Page(parms);
        var sort = new Sort(parms);
        var result = yield this.thriftClients.build.findSorts(sort,page);
        this.body = result;
    });
    router.get('/findPics',  function *(next) {
        var parms = querystring.parse(this.req._parsedUrl.query);
        var page = new Page(parms);
        var pic = new Pic(parms);
        var result = yield this.thriftClients.build.findPics(pic,page);
        this.body = result;
    });
    router.get('/findAccounts',  function *(next) {
        var parms = querystring.parse(this.req._parsedUrl.query);
        var page = new Page(parms);
        var account = new Account(parms);
        var result = yield this.thriftClients.build.findAccounts(account,page);
        this.body = result;
    });


};
