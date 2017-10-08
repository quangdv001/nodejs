var person = {
    firstName: "hoa",
    lastName: "mai",
    sayHello: function(){
        console.log("hello, " + this.firstName + " " + this.lastName);
    }
};

person.sayHello();
console.log(person.firstName);
var keyName = "firstName";
console.log(person["firstName"]);
console.log(person[keyName]);
