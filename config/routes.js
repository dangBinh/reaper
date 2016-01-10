const trainer = require('../controllers/trainer')

module.exports = function (app) {
    // Home
    app.get('/', function (req, res) {
        res.render('../../views/layout.html', {
            title: "Reaper"
        })
    })
    // Trainer
    app.get('/trainer', trainer.index)
}