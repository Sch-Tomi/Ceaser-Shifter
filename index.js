const express = require('express')
const app = express()

const ceaserShift = require('./lib/ceaser-shift')
const chiper = new ceaserShift()

const bodyParser = require('body-parser');

app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/fonts/'));

app.use('/vue', express.static(__dirname + '/node_modules/vue/dist/'));
app.use('/axios', express.static(__dirname + '/node_modules/axios/dist/'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/ceaser-shift', function(req, res) {
    console.log(req.query);
    res.json({ chiperDict: chiper.find(req.query.key)})
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
