const {Router} = require('express')
const router = Router()
// Hosts
const episode = require('./routers/Episode')
const anime = require('./routers/Anime')
// Router Use
router.use(episode)
router.use(anime)

module.exports = router