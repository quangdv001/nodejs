var util = require("util");

var name = "Hoa";
var message = util.format("Hello, %s", name);
util.log(message);

console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));