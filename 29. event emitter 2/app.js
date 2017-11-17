var Emitter = require('events');
var eventConfig = require('./config').events;

var emitter = new Emitter();

emitter.on(eventConfig.BAD_SCORE, function (){
    console.log("Một môn nào đó bị điểm kém");
});
emitter.on(eventConfig.BAD_SCORE, function (){
    console.log("đã có điểm kém, báo phụ huynh");
});

//bảng điểm
var scores = [10,4];

for(var s of scores){
    if(s < 5){
        console.log("điểm thấp", s);
        emitter.emit(eventConfig.BAD_SCORE);
    }
}
