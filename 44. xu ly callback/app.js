function readDatabase(callback){
    // read done
    var user = {
        name : "mai hoa"
    }

    callback(user);
}

// yeu cau truy van du lieu
readDatabase(function(data){
    console.log("read done callback");
    console.log("data:", data);
});

// noi khac
readDatabase(function (data) {
    console.log("read done callback 2");
    console.log("user name:", data.name);
});