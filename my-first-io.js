const fs = require("fs");

let x = fs.readFile(process.argv[2],(err,data)=>{
    if (err) throw err;
    data=data.toString().split("\n").length;
    console.log(data - 1);
} )

