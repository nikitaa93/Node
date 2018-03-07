let buf = new Buffer('Nikita');
let buf1 = new Buffer('Aggarwal');

//Displaying buffer buf
console.log(buf.toString());
console.log(buf1.toString());

//Converting buf and buf1 to json
let json = buf.toJSON(buf);
let json1 = buf1.toJSON(buf1);

console.log('JSON of '+buf+' : ');
console.log(json);
console.log('JSON of '+buf1+' : ');
console.log(json1);

//Concatinating buffer buf1 and buf
let bufConcat = Buffer.concat([buf,buf1]);
console.log('Concatenated buffer : '+bufConcat);

//Copying bufConcat to buffer
let copiedBuffer = new Buffer(10);
bufConcat.copy(copiedBuffer);
console.log('Copied Buffer content: ' + copiedBuffer.toString());


//Comparing buf and buf1
let result = buf.compare(buf1);

if(result < 0) {
   console.log(buf +' comes before ' + buf1);
}else if(result == 0){
   console.log(buf +' is same as ' + buf1);
}else {
   console.log(buf +' comes after ' + buf1);
}

//Slicing buf
let bufSlice = buf.slice(0,4);
console.log('After slicing : '+bufSlice);

//Finding length

console.log('Length of '+buf+' : '+buf.length);