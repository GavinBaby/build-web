'use strict';

var MysqlClient = require(process.cwd() + '/lib/core/mysqlClient');

class DefaultMysqlClient extends MysqlClient {
}

module.exports = new DefaultMysqlClient();