const express = require('express')
const app = express()

app.use(express.static(__dirname + '/View'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/view/index.html');

});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
