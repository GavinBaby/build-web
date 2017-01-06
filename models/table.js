var bookshelf = require(process.cwd() + '/clients/defaultMysqlClient').bookshelf;

var table = {};// 帐户表
table.account = bookshelf.Model.extend({
    tableName: 'account'
});

module.exports = table;
