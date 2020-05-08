// graphpack.config.js
const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello world!');
});

module.exports = {
    server: {
        applyMiddleware: {
            app,
            path: '/graphql', // default
        },
    },
};
