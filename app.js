// Require the Express npm Package
const express = require('express')


// Creating our server named app
const app = express();

// Make everything inside public available
app.use(express.static('public'));

// Creating a 'Get' Route
app.get('/home', (request, response, next)=>{
    //response.send('<h1>Hello, World</h1>')
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/views/about.html');
}) 

app.get('/works', (request, response)=>{
    response.sendFile(__dirname + '/views/works.html');
}) 

// Start the Server
app.listen(3000, ()=> console.log('App is listening on PORT 3000'));