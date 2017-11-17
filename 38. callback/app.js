var firstFunction = function(){
    console.log('i am first');
}

var secondFunction = function(){
    setTimeout(firstFunction, 5000);
    console.log('i am second');
}

secondFunction();