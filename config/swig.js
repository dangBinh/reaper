const swig = require('swig')

module.exports = function (app) {
    app.engine('html', swig.renderFile)
    app.set('views', __dirname + '/../app/views')
    app.set('view cache', false)
}
