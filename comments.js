// Create web server
const express = require('express');
const app = express();
// Set up express to use ejs
app.set('view engine', 'ejs');
// Set up express to serve static files
app.use(express.static('public'));

// Import the comments data
const comments = require('./data/comments');

// Create a route for the comments
app.get('/comments', (req, res) => {
    res.render('comments', { comments });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started');
});