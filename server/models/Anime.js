const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
    viewId: {type: String, required: true, index: { unique: true }},
    title: {type: String, required: true, index: { unique: true }},
    jp_title: String,
    en_title: String,
    cn_title: String,
    content: String,
    type: String,
    status: String,
    source: String,
    rating: String,
    audios: String,
    subtitles: String,
    created_at: Number,
    updated_at: Number
})

animeSchema.pre('save', function (next) {
    var anime = this;
    anime.created_at = Date.now()
    anime.updated_at = Date.now()
    next()
})

const Anime = mongoose.model('Anime', animeSchema, 'animes')

module.exports = Anime