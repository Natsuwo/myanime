const Episode = require('../models/Episode')
var shortId = require('shortid');

module.exports = {
    async index(req, res) {
        try {
            const episodes = await Episode.find()
            res.send(episodes)
        } catch (err) {
            res.status(500).send({error: 'Error in get episode'})
        }
    },
    async post(req, res) {     
        try {
            const playId = shortId.generate()
            req.body.playId = playId
            await Episode.create(req.body)
            res.send({message: 'success!'})
        } catch (err) {
            res.status(500).send({error: 'Error in add episode'})
        }
    }
}