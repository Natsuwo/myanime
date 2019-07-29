const {Router} = require('express')
const route = Router()
const AnimeController = require('../controllers/Anime')

route.post('/anime/index', AnimeController.postIndex)

module.exports = route