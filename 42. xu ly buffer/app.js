var buffer = new Buffer("xin chào", 'utf8');

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toString("ascii"));
console.log(buffer.toJSON());

console.log(buffer[2]);

buffer.write("hoa");
console.log(buffer.toString());