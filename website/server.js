const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dank = require('../src/dank');

let port = process.env.PORT || 9000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/app'));

app.post('/dank', (req, res) => {
    let dank = req.body.dank;
    dank.string(dank, undanked => {
        res.send(undanked);
    });
});

app.get('/', (req, res) => {
    res.send('./app/index.html');
});

app.listen(port, () => {
    console.log('*hacker voice* "im in"');
});