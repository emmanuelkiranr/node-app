
console.log("Hello World!")

const myModule = require("./my-modules"); 
console.log(myModule);


const express = require('express'); // import express from the express module
const { get } = require("express/lib/response");
const { response } = require("express");
const { readFile } = require('fs');
const app = express(); /* create an instance of express app this allows us to create different urls and
endpoints that a user can navigate to in the browser.*/

app.get('/',(request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send("Server error")
        }
        response.send(html);
    })
});

// using promises

// app.get('/', async (request, response) => {

//     response.send( await readFile('./home.html', 'utf8') );

// });

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))
