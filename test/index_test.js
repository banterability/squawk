var assert = require('assertive'),
    childProcess = require('child_process'),
    squawk = require('../index');

function squawkCli(testString, cb){
  childProcess.exec('./bin/squawk ' + testString, function(err, stdout, stderr){
    cb(err, stdout);
  });
}

describe('squawk', function(){
  describe('from the command line', function(){
    it('returns each character on its own line', function(done){
      var expected = '%\n%\n%\n';
      squawkCli('%%%', function(err, actual){
        assert.equal(expected, actual);
        done();
      });
    });

    it('replaces numbers with their word form', function(done){
      var expected = 'two\nfour\n';
      squawkCli('24', function(err, actual){
        assert.equal(expected, actual);
        done();
      });
    });

    describe('letters', function(){
      it('replaces letters with their word form', function(done){
        var expected = 'alpha\ncharlie\n';
        squawkCli('ac', function(err, actual){
          assert.equal(expected, actual);
          done();
        });
      });

      it('handles mixed case', function(done){
        var expected = 'oscar\nkilo\n';
        squawkCli('Ok', function(err, actual){
          assert.equal(expected, actual);
          done();
        });
      });
    });

    it('handles symbols', function(done){
      var expected = 'dash\ndash\ndash\n';
      squawkCli('-–—', function(err, actual){
        assert.equal(expected, actual);
        done();
      });
    });

    it('handles a mix of all character types', function(done){
      var expected = 'mike\nfive\nvictor\ndash\ntwo\ntango\nsix\n';
      squawkCli('M5V-2T6', function(err, actual){
        assert.equal(expected, actual);
        done();
      });
    });
  });

  describe('as a library', function(){
    it('exists', function(){
      assert.truthy(squawk);
    });

    it('returns each character on its own line', function(){
      var expected = ['%', '%', '%'];
      assert.deepEqual(expected, squawk('%%%'));
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

    it('handles symbols', function(){
      var expected = ['dash', 'dash', 'dash'];
      assert.deepEqual(expected, squawk('-–—'));
    });

    it('handles a mix of all character types', function(){
      var expected = ['mike', 'five', 'victor', 'dash', 'two', 'tango', 'six'];
      assert.deepEqual(expected, squawk('M5V-2T6'));
    });
  });
});
