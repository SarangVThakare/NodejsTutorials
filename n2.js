const fs = require('fs');
const os = require("os");
console.log(os.cpus().length);
// fs.writeFileSync('./test.txt', 'Creating a  test file using nodejs');

//Async:
fs.writeFile("./test.txt","creating a txt async using nodejs", (err) =>{});
//it gets an extra argument of callback function, which would appear on error.

let text = fs.readFileSync("./test.txt","utf-8");
console.log(text);

fs.readFile("./test.txt","utf-8",(err, result)=>{
    if(err){
        console.log("error found: ", err);
    } else{
        console.log(result);
    }
});

//speciality of simple read file is it has void return type, so you can't use it, as const = 

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt",`\nBuilding a new file`);
//used to copy data freom a f ile to another
fs.cpSync('./test.txt','./copy,txt');
//fs.unlinkSync("./copy.txt");
//used to delete the file

console.log(fs.statSync("./test.txt"));
console.log(fs.statSync("./test.txt").isFile());

fs.mkdirSync("my-docs");
fs.mkdirSync("my-docs/a/b",{recursive: true});

//wherever sync is not there, they are non-blocking operations, and doesn't require thread and doesn't stop the further execution of the code.
//wherever sync is there, they are blocking operations and stop further code execution and require thread.

//Default thread pool size = 4;
//Max: CPU cores;


