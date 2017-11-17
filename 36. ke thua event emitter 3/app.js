var Dialog = require('./dialog');


var dialog = new Dialog();

dialog.on("hello", function(data){
    console.log("co 1 loi chao moi!", data);
})

dialog.sayHello("mai hoa");