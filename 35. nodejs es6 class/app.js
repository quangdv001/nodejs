'use strict';

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // defind function
    sayHello(){
        console.log("Hello, "+ this.firstName + " "+ this.lastName);
    }
}

var p = new Person("Hoa", "Mai");
p.sayHello();
var c = new Person("ai", "b");
c.sayHello();

console.log(p.__proto__);
console.log(c.__proto__);
console.log(p.__proto__ === c.__proto__);