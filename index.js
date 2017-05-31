const express = require('express')
const app = express()

app.use(express.static('public'))
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/fonts/'));

app.use('/vue', express.static(__dirname + '/node_modules/vue/dist/'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');

});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
