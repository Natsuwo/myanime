const mongoose = require('mongoose')

const episodeSchema = new mongoose.Schema({
    playId: { type: String, required: true, index: { unique: true }},
    source: String,
    thumbnail: String,
    number: Number,
    views: Number,
    animeId: String,
    serverId: Number,
    created_at: Number,
    updated_at: Number
})

episodeSchema.pre('save', function (next) {
    var episode = this;
    episode.created_at = Date.now()
    episode.updated_at = Date.now()
    next()
})

const Episode = mongoose.model('Episode', episodeSchema, 'episodes')

module.exports = Episode