const {readFile, readFileSync} = require('fs'); // import that form fs filesystem module

// eg Blocking-

const txt = readFileSync('./hello.txt', 'utf8'); // read file
console.log(txt); // if its a large file it may take time   1st
console.log("Do it ASAP!!!") // 2nd

// eg non-blocking 

readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt);
})
console.log("Do it ASAP!!!")

// eg promise based solutins -asynchronous and non blocking - produce much cleaner code 

/* const { readFile } =  require('fs').promises; 
// this gives us a function that returns a promise when called
async function hello() {
    const file = await readFile('./hello.txt', utf8); 
}*/
