const {clubModel, playerClubSeasonModel, playerModel} = require('../Models')
const {Op} = require('sequelize')

const getClubByName = async (name) => {
    try {
        const findClub = await clubModel.findAll({
            where: {
                club_name: {
                    [Op.like]: `%${name}%`
                }
            },
            include: [
                {
                    model: playerClubSeasonModel,
                    include: [
                        {
                            model: playerModel
                        }
                    ]
                }
            ]
        })
        if (findClub.length === 0) {
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

const getClubById = async (id) => {
    try {
        const findClub = await clubModel.findByPk(id)
        if (!findClub) {
            const error = new Error()
            error.message = `Error al encontrar club con id=${id}`
            error.statusCode = 404
            throw error
        }
        return findClub
    } catch (error) {
        throw error
    }
}

const clubExists = async (id) => {
    try {
        const findClub = await clubModel.findByPk(id)
        if (findClub) {
            return true
        }
        return false
    } catch (error) {
        throw error
    }
}

module.exports = {getClubByName, getClubById, clubExists}