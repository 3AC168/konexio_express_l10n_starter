// Import et instantiation
const express = require('express'); 
const exphbs = require('express-handlebars');

const port = 3000; 

const app = express(); 

//const lang = lang(req.params.lang);


// express config 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
app.get('/:lang?', (req, res) => {
   res.render('home');    // "res.render" à la place "res.send", et faire le lien avec fichier "home.handlebars"
   say: 'Bonjour'
}); 
/*app.get('/:lang?/fr', (req, res) => {
    say: 'Bonjour'
});
app.get('/:lang?/en', (req, res) => {
    say: 'Hello'
});
app.get('/:lang?/es', (req, res) => {
    say: 'Hola'
});*/


// Run server 
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});