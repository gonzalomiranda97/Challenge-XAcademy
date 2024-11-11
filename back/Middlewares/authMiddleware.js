const {passportConfig} = require('../Config')

const userIsAuth = (req, res, next) => {
    passportConfig.authenticate('jwt-user', {session: false})(req, res, next)
}

module.exports = {userIsAuth}