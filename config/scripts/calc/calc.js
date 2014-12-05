#!/usr/bin/env nodejs

var math = require('./math.min.js');

function ret(result) {
    console.log('[' + String(result) + ']');
    console.log("command=echo -n '"+String(result)+"' | xclip -sel clip");
    console.log("icon=");
    console.log("subtext=copy result to clipboard");
}

try {
    var res = math.eval(process.argv[2]);
    if (typeof res == "number") { ret(String(math.round(res, 15))); }
    else { ret(String(res)); }
} catch (e) {
    process.exit(1);
}

//example expressions: (see more at mathjs.org)
// 12 / (2.3 + 0.7)     =>  4
// 5.08 cm to inch      =>  2 inch
// sin(45 deg) ^ 2      =>  0.5
// 9 / 3 + 2i           =>  3 + 2i
// det([-1, 2; 3, 1])   =>  -7
