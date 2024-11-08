const {Sequelize} = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
})

const initDB = async () => {
    try {
        await sequelize.authenticate().then(
            console.log('Se conectó a la base de datos!')
        )
    } catch (error) {
        console.log('Error al conectarse a la base de datos.', error)
    }
}

module.exports = {sequelize, initDB}