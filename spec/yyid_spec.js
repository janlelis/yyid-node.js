'use strict';

var yyid = require('../index');

describe('yyid()', function() {
  it('returns a string', function() {
    expect( typeof yyid() ).toBe('string');
  });

  it('looks like a UUID', function() {
    expect( yyid() ).toMatch(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/);
  });

  it('uses the the node crypto api', function() {
    var crypto = require('crypto');
    spyOn(crypto, 'randomBytes').and.callThrough();
    yyid();
    expect(crypto.randomBytes).toHaveBeenCalled();
  });
});
