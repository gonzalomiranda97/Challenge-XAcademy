const {loginService} = require('../Services')

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body
        const token = await loginService.login(email, password)
        res.status(200).json({token})
    } catch (error) {
        next(error)
    }
}

module.exports = {login}