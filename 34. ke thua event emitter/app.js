var EventEmitter = require("events");
var util = require("util");

function Dialog(){
    EventEmitter.call(this);
    this.message = "Hello world!";
}

util.inherits(Dialog, EventEmitter);

Dialog.prototype.sayHello = function () {
    console.log(this.message);
    this.emit("hello");
}

var dialog = new Dialog();

dialog.on("hello", function(){
    console.log("co 1 loi chao moi!");
})

dialog.sayHello("mai hoa");