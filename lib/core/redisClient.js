﻿'use strict';

var redis = require('redis');

class RedisClient {
  initialize (option) {
    var client;
    option = option || {};
    client = redis.createClient(option.port, option.host);
    if (option.password) {
      client.auth(option.password);
    }
    if (option.database) {
      client.select(option.database);
    }
    client.on("error", function(err) {
      return console.log(err);
    });
    client.on('connect', function() {
      return console.log('redis connected!');
    });
    this.set = function(type, key, value) {
      return new Promise(function(resolve, reject) {
        return client.set(type + ':' + key, JSON.stringify(value), function(err, reply) {
          if (err) {
            reject(err);
          }
          return resolve(reply);
        });
      });
    };
    this.setex = function(type, key, seconds, value) {
      return new Promise(function(resolve, reject) {
        return client.setex(type + ':' + key, seconds, JSON.stringify(value), function(err, reply) {
          if (err) {
            reject(err);
          }
          return resolve(reply);
        });
      });
    };
    this.get = function(type, key) {
      return new Promise(function(resolve, reject) {
        return client.get(type + ':' + key, function(err, reply) {
          var o;
          if (err) {
            reject(err);
          }
          if (reply) {
            o = JSON.parse(reply);
            return resolve(o);
          } else {
            return resolve(null);
          }
        });
      });
    };
    this.del = function(type, key) {
      return new Promise(function(resolve, reject) {
        return client.del(type + ':' + key, function(err, reply) {
          if (err) {
            reject(err);
          }
          return resolve(reply);
        });
      });
    };
    this.expire = function(type, key, seconds) {
      return new Promise(function(resolve, reject) {
        return client.expire(type + ':' + key, seconds, function(err, reply) {
          if (err) {
            reject(err);
          }
          return resolve(reply);
        });
      });
    };
    this.mget = function(type, keys) {
      var typeKeys;
      typeKeys = [];
      keys.forEach(function(key) {
        return typeKeys.push(type + ':' + key);
      });
      return new Promise(function(resolve, reject) {
        return client.mget(typeKeys, function(err, replies) {
          var objects;
          if (err) {
            reject(err);
          }
          if (replies) {
            objects = [];
            replies.forEach(function(reply) {
              var o;
              o = JSON.parse(reply);
              return objects.push(o);
            });
            return resolve(objects);
          } else {
            return resolve(null);
          }
        });
      });
    };
  }
}

module.exports = RedisClient;
