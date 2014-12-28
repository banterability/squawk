var assert = require('assertive');
var squawk = require('../index');


describe('squawk', function(){
  describe('as a library', function(){
    it('exists', function(){
      assert.truthy(squawk);
    });

    it('returns each character on its own line', function(){
      var expected = ['-', '-', '-'];
      assert.deepEqual(expected, squawk('---'));
    });

    it('replaces numbers with their word form', function(){
      var expected = ['two', 'four'];
      assert.deepEqual(expected, squawk('24'));
    });

    describe('letters', function(){
      it('replaces letters with their word form', function(){
        var expected = ['alpha', 'charlie'];
        assert.deepEqual(expected, squawk('ac'));
      });

      it('handles mixed case', function(){
        var expected = ['oscar', 'kilo'];
        assert.deepEqual(expected, squawk('Ok'));
      });
    });

    it('handles a mix of letters and numbers', function(){
      var expected = ['mike', 'five', 'victor', 'two', 'tango', 'six'];
      assert.deepEqual(expected, squawk('M5V2T6'));
    });
  });
});
