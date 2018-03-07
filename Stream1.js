let fs = require('fs');

//Using readStream
let readStream = fs.createReadStream('input.txt');
let data='';
readStream.setEncoding('UTF8');
readStream.on('data',(chunk)=>{
    data+=chunk;
});
readStream.on('end',()=>{
    console.log(data);
});
readStream.on('error',(err)=>{
    console.log(err.stack);
});

console.log('Read part ended');

let writeStream = fs.createWriteStream('write.txt');
data = 'Writing into file';
writeStream.write(data,'UTF8');
writeStream.end();
writeStream.on('finish',()=>{
    console.log('finished');
})
writeStream.on('error',(err)=>{
    console.log(err.stack);
});
console.log('Write part ended');


