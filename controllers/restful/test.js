var querystring= require('querystring');
module.exports = function (app, router) {
    router.get('/findBuild',  function *(next) {
        var result = yield this.thriftClients.build.findBuild('2');
        this.body = result;
    });



};
