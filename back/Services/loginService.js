const jwt = require('jsonwebtoken')
const secret = require('../secret')
const {getUserByEmail} = require('./userService')
const {verifyPassword} = require('./hashPasswordService')

const login = async (email, password) => {
    try {
        const findUser = await getUserByEmail(email)
        if (findUser) {
            if (await verifyPassword(password, findUser.password)) {
                if (findUser.username == 'admin') {
                    const token = jwt.sign({
                        user: 'admin',
                        role: 'admin'
                    }, secret, {})
                    console.log('Se creó token de administrador!')
                    return token
                }
                else {
                    const token = jwt.sign({
                        user: findUser.username,
                        role: 'user'
                    }, secret, {})
                    console.log('Se creó token de usuario!')
                    return token
                }
            } else {
                const error = new Error()
                error.message = `Error al autenticar usuario. Contraseña incorrecta.`
                error.statusCode = 401
                throw error
            }
        }
        const error = new Error()
        error.message = `Error. No existe usuario con email=${email}`
        error.statusCode = 404
        throw error
    } catch (error) {
        throw error
    }
}

module.exports = {login}
