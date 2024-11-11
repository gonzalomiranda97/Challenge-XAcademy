const {userService} = require('../Services')

const getUserByEmail = async (req, res, next) => {
    try {
        const {email} = req.body
        const findUser = await userService.getUserByEmail(email)
        res.status(200).json(findUser)
    } catch (error) {
        next(error)
    }
}

const createUser = async (req, res, next) => {
    try {
        const {username, email, password} = req.body
        const newUser = await userService.createUser(username, email, password)
        res.status(200).json(newUser)
    } catch (error) {
        next(error)
    }
}

module.exports = {getUserByEmail, createUser}