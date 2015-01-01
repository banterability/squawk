var childProcess = require('child_process');

function callCli(testString, cb){
  childProcess.exec('./bin/squawk ' + testString, function(err, stdout, stderr){
    cb(err, stdout);
  });
}

module.exports = {callCli: callCli};
