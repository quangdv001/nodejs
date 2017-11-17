var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/readme.txt",{
    encoding: "utf8",
    highWaterMark: 16* 1024 //32kb
});

var writable = fs.createWriteStream(__dirname + "/readme2.txt");
var compressed = fs.createWriteStream(__dirname + "/readme3.txt.gz");

var gzip = zlib.createGzip();

//copy
readable.pipe(writable);

//compress
readable.pipe(gzip).pipe(compressed);