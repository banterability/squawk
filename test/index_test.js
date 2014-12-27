var assert = require('assertive');
var squawk = require('../index');

describe('squawk', function(){
  it('exists', function(){
    assert.truthy(squawk);
  });

  it('returns each character on its own line', function(){
    var expected = 'h\ne\nl\nl\no';
    assert.equal(expected, squawk('hello'));
  });
});
