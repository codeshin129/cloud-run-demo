const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send('I am an endpoint and I am pushed by Github Actions.')
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
})