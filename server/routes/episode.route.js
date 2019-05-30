const episodeController = require('../controllers/episode.controller')

module.exports = (app) => {
    app.get('/api/episode', episodeController.index)
    app.post('/api/episode', episodeController.post)
}