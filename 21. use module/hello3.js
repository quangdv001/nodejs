function Person(){
    this.message = "Hello nodejs3";
    this.sayHello = function(){
        console.log(this.message);
    }
}

module.exports = new Person();