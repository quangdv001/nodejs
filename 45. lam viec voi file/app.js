// fs
var fs = require("fs");

var content = fs.readFileSync(__dirname + "/readme.txt", "utf8");
console.log(content);
console.log(__dirname);

fs.readFile(__dirname + "/readme.txt","utf8", function (err, data) {
    console.log(data);
})
console.log("done");