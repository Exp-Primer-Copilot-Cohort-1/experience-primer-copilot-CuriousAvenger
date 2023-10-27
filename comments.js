// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Create a parser for JSON
const jsonParser = bodyParser.json();

// Create a comments array
const comments = [];

// Create a comment object
const comment = {
    id: 1,
    username: 'testuser',
    comment: 'testcomment',
    createdAt: new Date()
};

// Add the comment to the array
comments.push(comment);

// Create a GET /comments route
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a POST /comments route
app.post('/comments', jsonParser, (req, res) => {
    // Get the body of the request
    const body = req.body;
    // Create a new comment object
    const newComment = {
        id: comments.length + 1,
        username: body.username,
        comment: body.comment,
        createdAt: new Date()
    };
    // Add the comment to the array
    comments.push(newComment);
    // Return the new comment
    res.json(newComment);
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});