const {Router} = require('express')
const route = Router()
const EpisodeController = require('../controllers/Episode')

route.post('/episode/index', EpisodeController.postIndex)

module.exports = route