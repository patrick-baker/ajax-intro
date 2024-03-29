const express = require('express');

const app = express();

const PORT = 5000;

app.use(express.static('server/public'));

let quotesData = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];  // link to index.html using AJAX (Asynch Javascript and XML)

app.get('/quotes', (req, res) => { // This is a request to the default route on this localhost:5000 port.
    console.log("I have been hit!");
    res.send(quotesData);
});

app.listen(PORT, () => {
    console.log('Up and running on port', PORT);
});