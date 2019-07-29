const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    SALT_FACTOR = 12;

const userSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        index: { unique: true }
    },
    email: {
        type: String,
        required: true,
        index: { unique: true }
    },
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', function (next) {
    var user = this

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next()

    // generate a salt
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
        if (err) return next(err)

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err)

            // override the cleartext password with the hashed one
            user.password = hash;
            next()
        })
    })
})


userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema, 'user')

module.exports = User