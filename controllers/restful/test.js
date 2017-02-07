var querystring= require('querystring');
module.exports = function (app, router) {
    router.get('/findBuild',  function *(next) {
        var result = yield this.thriftClients.build.findBuild('2');
        this.body = result;
    });
    router.get('/create',  function *(next) {
        var account=new Account({mobile:'12657844119',password:'123123',type:'2' });
        var result = yield this.thriftClients.build.create(account,'555555');
        this.body = result;
    });




};
