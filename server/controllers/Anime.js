const Anime = require('../models/Anime')
module.exports = {
    async postIndex(req, res) {
        try {
            var data = await Anime.find()
            res.send({ success: true, data })
        } catch (err) {
            res.send({ success: false, error: err.message })
        }
    }
}