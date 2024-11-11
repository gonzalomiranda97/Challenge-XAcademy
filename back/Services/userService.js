const {userModel} = require('../Models')
const {hashPassword} = require('./hashPasswordService')

const getUserByEmail = async (email) => {
    try {
        const findUser = await userModel.findOne({
            where: {
                email: email
            }
        })
        if (!findUser) {
            const error = new Error()
            error.message = `Error al encontrar usuario con email=${email}`
            error.statusCode = 404
            throw error
        }
        return findUser
    } catch (error) {
        throw error
    }
}

const createUser = async (username, email, password) => {
    try {
        const newUser = {
            username: username,
            email: email,
            password: await hashPassword(password)
        }
        await userModel.create(newUser)
        return newUser
    } catch (error) {
        throw error
    }
}

module.exports = {getUserByEmail, createUser}