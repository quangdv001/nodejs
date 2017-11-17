var util = require("util");

function Person() {
    this.firstName = "hoa";
    this.lastName = "Mai";
}

Person.prototype.sayHello = function(){
    console.log("Hello " + this.firstName + " " + this.lastName);
}

function Student(params) {
    Person.call(this);
    this.id = "1234";
}

util.inherits(Student, Person);

var sv = new Student();
sv.sayHello();