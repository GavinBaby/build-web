var knex = require(process.cwd() + '/clients/defaultMysqlClient').knex;
var cache = require(process.cwd() + '/clients/defaultCacheClient');
var t_account = require(process.cwd() + '/models/table').account;
var uuid = require('node-uuid');
var Promise = require("bluebird");
var moment = require('moment');
var util=  require(process.cwd() + '/clients/util');
module.exports =function (app) {
    var serviceImpl = {};
    serviceImpl.testThrift = function (callback) {
        callback(null, 'hello world' );
    }
    // 注册
    serviceImpl.create = function (account,code, callback) {
        // 定义返回值
        var response_state;
        // 查询数据库 检查手机号 用户名是否重复
        Promise.try(function () {
            if (account.type) {
                if (util.checkCode(account.mobile, code) == -1) {
                    account.back = {code: -5, text: '验证码错误'}
                    callback(null, account);
                } else {
                    t_account.query().select('id').where({mobile: account.mobile}).then(function (reply) {
                        if (reply && reply[0]) {
                            response_state = new Back({code: -1, text: '该用户已注册'});
                        } else {
                            // 获的账户序列
                            account.id = uuid.v1();
                            // 添加注册时间
                            account.regTime = moment().format('YYYY-MM-DD HH:mm:ss');
                            // 添加账户状态 1：正常；2：已停用 3：删除
                            account.state = '1';
                            delete  account.back;
                            // 添加用户信息
                            return t_account.query().insert(account);
                        }
                    }).then(function (reply) {
                        if (!response_state) {
                            response_state = new Back({code: 1, text: '注册成功'});
                        }
                        // 将密码删除
                        account.password = null;
                        // 返回数据
                        account.back = response_state;
                        callback(null, account);
                    }).catch(function (err) {
                        account.back = new Back({code: 500, text: '系统错误'});
                        callback(null, account);
                    });
                }
            }else{
                account.back = new Back({code: -6, text: '客户端类型为空'});
                callback(null, account);
            }
        })
    };

    // 登录
    serviceImpl.login = function (account  ,callback) {
        // 定义返回值
        var response_state, data;
        Promise.try(function () {
            return t_account.query().select().where({mobile: account.mobile,type:account.type}).limit(1);
        }).then(function (reply) {
            if (!(reply && reply[0])) {
                // 查询不到数据
                response_state = new Back({code: -1, text: '帐号未注册'});
            } else {
                // 校验账户状态   1：正常；2：已停用 3：删除
                if (reply[0].state == 3) {
                    response_state = new Back({code: -2, text: '帐号已停用'});
                } else if (reply[0].state == 2) {
                    response_state = new Back({code: -3, text: '账户已删除'});
                } else if (reply[0].state == 1) {
                    // 校验密码
                    if (reply[0].password != account.password) {
                        response_state = new Back({code: -4, text: '密码错误'});
                    } else {
                        response_state = new Back({code: 1, text: '登录成功'});
                        // 把密码设为空
                        reply[0].password = null;
                        // 生产账户对象
                        data = new Account(reply[0]);
                        // 把数据存入token
                        cache.setex('token', reply[0].id, 3600, data);
                        // 更新本次登录时间和上次登录时间
                        return knex('account').update({
                            thisLoginTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                            lastLoginTime: reply[0].thisLoginTime
                        }).where('id', reply[0].id);
                    }
                }
            }
        }).then(function (reply) {
            data.back=response_state;
            callback(null, data);
        }).catch(function (err) {
            console.log(err.message)
            data.back=new Back({code: 500, text: '系统错误'})
            callback(null, data);
        });
    };

    serviceImpl.getMenu  = function (seq_no, callback) {
        // 根据用户表主键查询 运营用户表 获得权限字段
        knex('op_user_info').select('roles').where({seq_no: seq_no}).limit(1).then(function (reply) {
            if (reply && reply.length > 0) {
                // 查询 角色表信息
                return knex('op_role_info').select('menus').where({seq_no: reply[0].roles}).limit(1).limit(1);
            }
        }).then(function (reply) {
            if (reply && reply.length > 0) {
                // 获得权限数组

                var menus = reply[0].menus.substring(0, reply[0].menus.length - 1).split(',');
                console.log(menus);
                // 根据权限数组查询权限信息
                return knex.raw('SELECT DISTINCT seq_no as id, parent_menu_seq as pid, menu_name as name, menu_link as link FROM op_menu_info WHERE seq_no IN (' + menus + ') OR seq_no IN (SELECT DISTINCT parent_menu_seq FROM ' +
                    'op_menu_info WHERE seq_no IN (' + menus + ') ' + ')OR parent_menu_seq IN (' + menus + ')');
            }
        }).then(function (reply) {
            var data = [];
            for (var i = 0; i < reply[0].length; i++) {
                data[i] = {};
                data[i] = reply[0][i];
            }
            console.log(data);
            callback(null, new MenuList({state: new Back({code: 1, text: '成功'}), menu: data}));
        }).catch(function (err) {
            callback(null, new MenuList({state: new Back({code: 500, text: "系统错误"})}));
        });
    }


    serviceImpl.findAccounts = function (account,page,callback) {
        var sql = knex.select('username','mobile','state','regTime' ).from('account');
        if(account.username ){
            sql.where('username', 'like','%'+account.username+'%');
        }
        if(account.mobile ){
            sql.where('mobile',account.type);
        }
        if(account.op_time ){
            sql.where('regTime', 'like','%'+account.op_time+'%');
        }
        if(account.state ){
            sql.where('state',account.state );
        }
        if(page.sortName=='0'){
            page.sortName ='regTime'
            page.sortType ='desc'
        }
        var totalSize = '';
        var sqlSize = sql.clone();
        sqlSize.count('id as totalSize').then(function (success) {
            totalSize = success[0].totalSize;
            util.doPage(page, sql);
            return sql;
        }).then(function (lists) {
            callback(null,new AccountList({data:lists,totalSize:totalSize}));
        }).catch(function (err) {
            callback(null, new Back({code:500 ,text:"系统错误"}));
        });
    };
    return {
        serviceImplementation: serviceImpl
    };
};