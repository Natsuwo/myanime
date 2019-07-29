const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
    anime_id: Number,
    title: Object,
    description: String,
    type: String,
    status: String,
    source: String,
    rating: String,
    audio: Array,
    subtitle: Array,
    view_id: {
        type: String,
        required: true,
        index: { unique: true }
    },
    create_at: Number,
    update_at: Number

})

animeSchema.pre('save', function (next) {
    var anime = this
    anime.create_at = Date.now()
    anime.update_at = Date.now()
    next()
})

const Anime = mongoose.model('Anime', animeSchema, 'anime')

module.exports = Anime