const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test =
    jsc.forall("array nat", function(arr) {
        var count = Sorted(arr); 
        return count >= 0;
    });
jsc.assert(test);
