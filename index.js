// default entry point to a nodejs app index.js
console.log("Hello World!")
// run the code -> node index.js || node . since its an index.js file we can point to the parent directory 

const myModule = require("./my-modules"); //import the module to the var myModule using require() in our project
console.log(myModule);

// npm -> helps to import somebody else's module/code 

/* npm init -> creates a package.json which contains the metadata of our project 
and keeps track of the dependency that we use*/

/* when we install packages [npm install express] it will add express to a dependency in the package.json file
and peg it to a specific version; This dependency object will help us manage multiple dependency in this 
project and then reinstall them all at once at a different system*/

// const express = require("express");

/* the actual code of the dependency lives in the node modules directory; The package.json file fetches the 
remote package and saves the source code to node modules*/


const express = require('express'); // import express from the express module
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {

    response.send( await readFile('./home.html', 'utf8') );

});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
