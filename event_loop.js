const read = require('fs');

console.log("This is the first task");
read.readFile('./text.txt' , 'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log("Task completed");
})
console.log("New task");