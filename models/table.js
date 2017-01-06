var bookshelf = require(process.cwd() + '/clients/defaultMysqlClient').bookshelf;

var table = {};// 帐户表
table.account = bookshelf.Model.extend({
    tableName: 'account'
});
table.sort = bookshelf.Model.extend({
    tableName: 'sort'
});
table.pic = bookshelf.Model.extend({
    tableName: 'pic'
});
table.pic_detail = bookshelf.Model.extend({
    tableName: 'pic_detail'
});
table.notice = bookshelf.Model.extend({
    tableName: 'notice'
});
table.notice_detail = bookshelf.Model.extend({
    tableName: 'notice_detail'
});
table.build = bookshelf.Model.extend({
    tableName: 'build'
});
table.build_detail = bookshelf.Model.extend({
    tableName: 'build_detail'
});
table.comment = bookshelf.Model.extend({
    tableName: 'comment'
});
module.exports = table;
