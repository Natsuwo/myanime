const Episode = require('../models/Episode')
module.exports = {
    async postIndex(req, res) {
        try {
            var data = await Episode.find()
            res.send({ success: true, data })
        } catch (err) {
            res.send({ success: false, error: err.message })
        }
    }
}