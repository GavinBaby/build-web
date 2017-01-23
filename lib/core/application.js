'use strict';

var co = require('co');
var koa = require('koa');
var Router = require('koa-router');
var logger = require('koa-logger');
var serve = require('koa-static');
var thrift = require('./koa-thrift');
var fs = require('fs');
var views = require('co-views');

module.exports = class Application {

    get sharedConfig() {
        return this._sharedConfig ? this._sharedConfig : {};
    }

    set sharedConfig(value) {
        this._sharedConfig = value;
        this.onUpdateConfig(value);
        for (let i = 0; i < this.applications.length; i++) {
            this.applications[i].onUpdateConfig(value);
        }
    }

    constructor(options) {
        this.options = options || { port: 3000, static_path: '/public' };
        this.applications = [];
    }

    onStart() {
        console.log(11111111111111)
    }

    onUpdateConfig(config) {
        console.log(2222222222)
    }

    *getAccount(token) {
        return this.user||token;
    }



    loginSuccess(context, token) {
        if (context.session) {
            context.session.token = token;
        }
    }

    logout(context) {
        if (context.session) {
            context.session.token = undefined;
        }
    }
    isLogin(context, next){
        if (context.session.token) {
            next();
        }else{
           this.body =  app.render('login');
            return false;
        }
    }

    onInitNewRequest(context) {
    }

    attachThriftClient(name, context, url, definition) {
        var headers = {};
        if (context.session && context.session.token) {
            headers.authorization = 'Bearer ' + context.session.token;
        }
        context.thriftClients = context.thriftClients || {};
        context.thriftClients[name] = thrift.createHttpClient(url, definition, {headers: headers});
    }

    loadThriftServices(options, app) {
        this._app.use(thrift.createHttpServer(options, app));
    }

    loadControllers(options, app) {
        options.subDir = options.subDir || '';
        options.subUrl = options.subUrl || '';
        var dir = process.cwd() + options.subDir + '/controllers';
        this.loadControllersRecursive(dir + '/restful', options.subUrl, app);
        this.loadControllersRecursive(dir + '/view', options.subUrl, app);
    }

    loadControllersRecursive(dir, url, app) {
        try {
            fs.readdirSync(dir).forEach(file => {
                var path = dir + '/' + file;
                var stats = fs.lstatSync(path);
                if (stats.isDirectory()) {
                    this.loadControllersRecursive(path, url + '/' + file);
                } else {
                    let router = new require('koa-router')()
                    require(path)(app, router);
                    if (router && router instanceof Router) {
                        this.rootRouter.use(url, router.routes(), router.allowedMethods());
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    attachApplication(applicationName, options) {
        options = options || {};
        options.subDir = options.subDir || '';
        options.subUrl = options.subUrl || '';
        let app = this;
        if (applicationName) {
            options.subDir = '/applications/' + applicationName;
            options.subUrl = '/' + applicationName;
            app = require(process.cwd() + '/applications/' + applicationName);
            this.applications.push(app);
        }
        app.render = views(process.cwd() + options.subDir + '/views', {
            map: { html: 'ejs' }
        });
        //if(applicationName == 'txjc-service'){
            this.loadThriftServices(options, app);
        //}
        this.loadControllers(options, app);
    }

    *start() {
        console.log(5)
        let options = this.options;
        let self = this;
        this._app = koa();
        this.options = options;
        var app = this._app;
        // error
        app.use(function* (next){
            try {
                yield next;
            } catch (err) {
                this.status = err.status || 500;
                this.type = 'html';
                this.body = '<p>Something <em>exploded</em>, please contact Maru.</p>';
                self._app.emit('error', err, this);
            }
        });


        // logger
        app.use(logger());


        // session
        app.keys = ['some secret hurr'];
        var session = null;
        if (process.env.USE_REDIS_SESSION) {
            session = require('koa-redis-session')({
                store: {
                    host: process.env.SESSION_PORT_6379_TCP_ADDR || '127.0.0.1',
                    port: process.env.SESSION_PORT_6379_TCP_PORT || 6379,
                    ttl: 3600,
                }
            });
        } else {
            session = require('koa-session')(app);
        }

        app.use(function* (next) {
            var req = this.request;
            var content_type='';
            if(req.headers['content-type']){
              content_type=req.headers['content-type'].split(";");
            }
            if(content_type.length == 3 ){
                content_type = content_type[0]+';'+content_type[2];
                req.headers['content-type'] = content_type;
                yield session.call(this, next);
            }else{
                if (req && req.headers.authorization && req.headers.authorization.indexOf('Bearer ' === 0)) {
                    var authorization = req.headers.authorization;
                    this.session.token = authorization.substr(7, authorization.length - 7);
                 yield next;
                } else {
                    yield session.call(this, next);
                }
            }
        });

        // 404
        app.use(function* (next) {
            yield next;
            if (404 != this.status) return;
            this.status = 404;
            switch (this.accepts('html', 'json')) {
                case 'html':
                    this.type = 'html';
                    this.body = '<p>Page Not Found</p>';
                    break;
                case 'json':
                    this.body = {
                        message: 'Page Not Found'
                    };
                    break;
                default:
                    this.type = 'text';
                    this.body = 'Page Not Found';
            }
        });

        app.use(function* (next) {
            this.entryApp = self;
            if (this.session && this.session.token) {
                if (this.session.token === self.sharedConfig.systemBearerToken) {
                    this.user = {displayName: 'System User'};
                } else {
                    let user = yield self.getAccount.call(this, this.session.token);
                    this.user = user;
                }
            }
            self.onInitNewRequest(this);
            yield next;
        });

        this.rootRouter = new Router();

        this.attachApplication();
        this.onStart();

        var routes = this.rootRouter.routes();
        app.use(routes);

        app.use(serve(process.cwd() + this.options.static_path));
    }

    run (port) {
        let self = this;
        co(function* () {
            try {
                console.log(3 )
                yield self.start();
                console.log(4 )
                self._app.listen(port || 3000);
            } catch (err) {
                console.log(err);
            }
        });
    }
}