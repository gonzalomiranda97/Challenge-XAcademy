const { sequelize } = require('../Config/dbConfig')
const {playerClubSeasonModel, playerModel} = require('../Models')
const {Op} = require('sequelize')

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
// Una transaccion es una secuencia de operaciones en una base de datos que se ejecuta como una unidad. Si hay un error, 
// se deshace lo realizado y evita el autoincremento del id
const createPlayerCS = async (player, playercs) => {
    const transaction = await sequelize.transaction()
    try {
        await playerModel.create(player, {transaction})
        const newPlayerCS = await playerClubSeasonModel.create(playercs, {transaction})
        await transaction.commit()
        return newPlayerCS
    } catch (error) {
        await transaction.rollback()
        throw error
    }

}

const editPlayerCS = async (player, playercs) => {
    const transaction = await sequelize.transaction()
    try {
        await playerModel.update(player, {
            where: {player_id: player.player_id}
        })
        await playerClubSeasonModel.update(playercs, {
            where: {id: playercs.id}
        })
        await transaction.commit()
        const updatedPlayer = {player, playercs}
        return updatedPlayer
    } catch (error) {
        await transaction.rollback()
        throw error
    }
}

const getPlayerCSByPositions = async (positions) => {
    try {
        const findPlayerCS = await playerClubSeasonModel.findAll({
            where: {
                player_positions: {
                    [Op.like]: `%${positions}%`
                }
            },
            include: {
                all: true
            }
        })
        if (findPlayerCS.length === 0) {
            const error = new Error()
            error.message = `Error al encontrar PlayerClubSeasons con positions=${positions}`
            error.statusCode = 404
            throw error
        }
        return findPlayerCS
    } catch (error) {
        throw error
    }
}

module.exports = {getPlayerCSById, getPlayerCSByPlayerId, getPlayerCSByClubId, createPlayerCS, editPlayerCS, getPlayerCSByPositions}