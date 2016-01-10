exports.index = function(req, res) {

    // Render from server
    res.render('../../views/main.html', {
        title: 'Trainer'
    })
}