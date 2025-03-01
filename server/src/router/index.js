const configureRouter = (app) => {

    app.get('/status', (req, res) => {
        res.send('OK')
    })
}

module.exports = { configureRouter };