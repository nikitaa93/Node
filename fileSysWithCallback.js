let fs = require("fs");

fs.readFile('input.txt',(err,data)=>{
    if(err)
        console.data(err);

    console.log(data.toString());
    
});


console.log("Program Ended");