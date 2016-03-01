'use strict';

var crypto = require('crypto');

var yyid = function yyid() {
  var randomBytes = crypto.randomBytes(16);
  return randomBytes.slice( 0, 4).toString('hex') + '-' +
         randomBytes.slice( 4, 6).toString('hex') + '-' +
         randomBytes.slice( 6, 8).toString('hex') + '-' +
         randomBytes.slice( 8,10).toString('hex') + '-' +
         randomBytes.slice(10,16).toString('hex');
};

module.exports = yyid;
