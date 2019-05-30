const AuthenticationController = require('../controllers/authentication.controller')
const AuthenticationControllerPolicy = require('../policies/authentication.policy')

module.exports = (app) => {
    app.post('/api/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/api/login',
        AuthenticationController.login)
}