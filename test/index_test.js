var assert = require('assertive');
var squawk = require('../index');

describe('squawk', function(){
  it('exists', function(){
    assert.truthy(squawk);
  });

  it('returns each character on its own line', function(){
    var expected = '-\n-\n-';
    assert.equal(expected, squawk('---'));
  });

  it('replaces numbers with their word form', function(){
    var expected = "two\nfour";
    assert.equal(expected, squawk('24'));
  });

  it('replaces letters with their word form', function(){
    var expected = "alpha\ncharlie";
    assert.equal(expected, squawk('ac'));
  });
});
