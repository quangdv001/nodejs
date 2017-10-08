var message = "hello nodejs5";

function sayHello(){
    console.log(message);
}

module.exports = {
    sayHello: sayHello
}