const episodeController = require('../controllers/anime.controller')

module.exports = (app) => {
    app.get('/api/anime', episodeController.index)

    app.post('/api/anime', episodeController.post)
}