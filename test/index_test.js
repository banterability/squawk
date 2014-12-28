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

  describe('letters', function(){
    it('replaces letters with their word form', function(){
      var expected = "alpha\ncharlie";
      assert.equal(expected, squawk('ac'));
    });

    it('handles mixed case', function(){
    var expected = "oscar\nkilo";
    assert.equal(expected, squawk('Ok'));
    });
  });

  it('handles a mix of letters and numbers', function(){
    var expected = "mike\nfive\nvictor\ntwo\ntango\nsix";
    assert.equal(expected, squawk('M5V2T6'));
  });
});
