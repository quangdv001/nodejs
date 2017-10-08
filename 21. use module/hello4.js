function Person() {
    this.message = "hello nodejs4";
    this.sayHello = function(){
        console.log(this.message);
    }
}

module.exports = Person;