const express = require('express')

var app = express();
app.use(express.json());

app.get('/cakes', (req, res) => {
    res.send('A phrase attribute is required');
})


app.listen(3000);