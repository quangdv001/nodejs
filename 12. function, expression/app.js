function sayHello(){
    console.log('hello node.js !!');
}

sayHello();

//first class function
function logSaying(fn) {
    fn();
    
}

logSaying(sayHello);

// function expression
var sayGoodbye = function(){
    console.log("good bye!!");
}

sayGoodbye();

logSaying(function(){
    console.log("hello, this is expression");
});