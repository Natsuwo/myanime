const User = require('../models/User')
const jwt = require('jsonwebtoken')

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, process.env.JWTSECRET, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            await User.create(req.body)
            res.send({
                message: 'Success!'
            })

        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in used.'
            })
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(403).send({
                    error: 'The login infomation was incorrect.'
                })
            }
            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'Wrong password!'
                })
            }

            const getUser = {}
            getUser.token = jwtSignUser(user.toJSON())

            res.send({
                user: getUser
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to log in.'
            })
        }
    }
}