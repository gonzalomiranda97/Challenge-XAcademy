const {playerClubSeasonModel} = require('../Models')

const getPlayerCSById = async (id) => {
    try {
        const findPlayerCS = await playerClubSeasonModel.findByPk(id, {include: {all: true}})
        if (!findPlayerCS) {
            const error = new Error()
            error.message = `Error al obtener PlayerClubSeason con id=${id}`
            error.statusCode = 404
            throw error
        }
        return findPlayerCS
    } catch (error) {
        throw error
    }
}

const getPlayerCSByPlayerId = async (player_id) => {
    try {
        const findPlayerCS = await playerClubSeasonModel.findAll({
            where: {
                PlayerId: player_id,
            },
            include: {
                all: true
            }
        })
        if (findPlayerCS.length === 0) {
            const error = new Error()
            error.message = `Error al obtener los PlayerClubSeasons con PlayerId=${player_id}`
            error.statusCode = 404
            throw error
        }
        return findPlayerCS
    } catch (error) {
        throw error
    }
}

const getPlayerCSByClubId = async (club_id) => {
    try {
        const findPlayerCS = await playerClubSeasonModel.findAll({
            where: {
                ClubId: club_id,
            },
            include: {
                all: true
            }
        })
        if (findPlayerCS.length === 0) {
            const error = new Error()
            error.message = `Error al obtener los PlayerClubSeasons con ClubId=${club_id}`
            error.statusCode = 404
            throw error
        }
        return findPlayerCS
    } catch (error) {
        throw error
    }
}

module.exports = {getPlayerCSById, getPlayerCSByPlayerId, getPlayerCSByClubId}