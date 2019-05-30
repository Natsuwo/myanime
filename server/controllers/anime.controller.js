const Anime = require('../models/Anime')
const md5 = require('md5')
const Hashids = require('hashids')
const hashids = new Hashids()

module.exports = {
    async index(req, res) {
        try {
            const animes = await Anime.find()
            res.send(animes)
        } catch (err) {
            res.status(500).send({error: 'Error in get animes'})
        }
    },
    async post(req, res) {
        try {
            const hashTitle = md5(req.body.title)
            const viewId = hashids.encodeHex(hashTitle)
            console.log(viewId)
            req.body.viewId = viewId
            await Anime.create(req.body)
            res.send({message: 'success!'})
        } catch (err) {
            res.status(500).send({error: err})
        }
    }
}