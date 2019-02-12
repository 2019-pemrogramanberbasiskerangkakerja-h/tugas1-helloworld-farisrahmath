var express = require('express')
var app = express()
var port = 5000

app.get('/', (req, res)  => res.send('Hello world'))

app.listen(port, () => console.log('Success. App listening on port %s', port))