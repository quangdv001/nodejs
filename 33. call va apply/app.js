var obj = {
    name: "Mai hoa",
    sayHello: function(pr1, pr2){
        console.log(`hello ${this.name}`);
        console.log("param", pr1, pr2)
    }
}

obj.sayHello("xin chao", "2017");
obj.sayHello.call({ name:"yen phuong"}, "xin chao", '2019');
obj.sayHello.apply({ name:"yen phuong"}, ['xin chao', '2018']);