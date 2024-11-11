const {playerModel} = require('../Models')
const {Op} = require('sequelize')

const getPlayerByName = async (name) => {
    try {
        const findPlayer = await playerModel.findAll({
            where: {
                long_name: {
                    [Op.like]: `%${name}%`
                }
            },
            include: {
                all: true
            }
        })
        if (findPlayer.length === 0) {
            const error = new Error()
            error.message = `Error al encontrar player con nombre=${name}`
            error.statusCode = 404
            throw error
        }
        return findPlayer
    } catch (error) {
        throw error
    }
}

module.exports = {getPlayerByName}