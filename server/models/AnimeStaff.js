const mongoose = require('mongoose')

const animeStaffSchema = new mongoose.Schema({
    anime_id: String,
    original_work: String,
    chief_direction: String,
    direction: String,
    character_design: String,
    music: String,
    animation_work: String
})

const AnimeStaff = mongoose.model('AnimeStaff', animeStaffSchema, 'animestaffs')

module.exports = AnimeStaff