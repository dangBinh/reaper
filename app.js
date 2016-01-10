const express =  require('express')
const app = express()

// Call routes config
require('./config/routes')(app)

// Call swig config
require('./config/swig')(app)

// Setup public path ( server static file )
app.use('/public', express.static(__dirname + '/public'))

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Reaper is running at http://%s:%s", host, port)
})
