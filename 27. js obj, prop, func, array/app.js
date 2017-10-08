var obj = {
    sayHello: "hello"
}

console.log(obj.sayHello);
console.log(obj['sayHello']);

var prop = "sayHello";
console.log(obj[prop]);

//func va arr
var arr = [];

arr.push(function(){
    console.log("hello1");
});
arr.push(function(){
    console.log("hello2");
});
arr.push(function(){
    console.log("hello3");
});

arr[0]();
arr[1]();
arr[2]();


arr.forEach(function(item){
    item();
});

for(item of arr){
    item();
}
