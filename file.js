/* node has a builtin file system module called 'fs' it can read, write and delete files on the file system
and it can also do things in a 'blocking' or 'non-blocking' way */

// sync === Blocking ie it'll need to finish all its work before any of your other code can run

const {readFile, readFileSync} = require('fs'); // import that form fs filesystem module


// eg Blocking- only after reading the text rest of code is executed

const txt = readFileSync('./hello.txt', 'utf8'); // read file
console.log(txt); // if its a large file it may take time   1st
console.log("Do it ASAP!!!") // 2nd

/* eg non-blocking - here node registers the callback, executes the rest of the rest of the script 
and finally runs the callback when the file has been read*/ 

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
