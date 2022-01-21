//Part1 
const events=require('events');
var eventEmitter = new events.EventEmitter();
const request = require('request');
const fs=require('fs');
request('http://www.google.com', function (err, response) {
 if(err)
 {console.log(err);}
fs.writeFile('./google.html',response.body,(err)=>{
    console.log(err);
});
});

//Part B
function copyfromwebtofs(){

    request('http://www.wikipedia.org', function (err, response) {
 if(err)
 {console.log(err);}
 let newfile = fs.createWriteStream('wikipedia.html') 
newfile.write(response.body);
console.log("Stream passing from web to fs");
});
}
eventEmitter.on('test',copyfromwebtofs);

eventEmitter.emit('test');