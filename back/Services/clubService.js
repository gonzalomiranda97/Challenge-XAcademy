const {clubModel} = require('../Models')
const {Op} = require('sequelize')

const getClubByName = async (name) => {
    try {
        const findClub = await clubModel.findAll({
            where: {
                club_name: {
                    [Op.like]: `%${name}%`
                }
            },
            include: {
                all: true
            }
        })
        if (!findClub) {
            const error = new Error()
            error.message = `Error al encontrar club con nombre=${name}`
            error.statusCode = 404
            throw error
        }
        return findClub
    } catch (error) {
        throw error
    }
}

module.exports = {getClubByName}