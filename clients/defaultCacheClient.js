'use strict';

var RedisClient = require(process.cwd() + '/lib/core/redisClient');
var MemoryClient = require(process.cwd() + '/lib/core/memoryClient');

if(process.env.ENV|| 'local'==='local'){
    module.exports = MemoryClient;
}else{
    module.exports =RedisClient;
}
