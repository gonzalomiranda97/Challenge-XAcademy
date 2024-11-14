const {playercsService} = require('../Services')

const getPlayerCSById = async (req, res, next) => {
    try {
        const findPlayerCS = await playercsService.getPlayerCSById(req.params.id)
        res.status(200).json(findPlayerCS)
    } catch (error) {
        next(error)
    }
}

const getPlayerCSByPlayerId = async (req, res, next) => {
    try {
        const findPlayerCS = await playercsService.getPlayerCSByPlayerId(req.params.id)
        res.status(200).json(findPlayerCS)
    } catch (error) {
        next(error)
    }
}

const getPlayerCSByClubId = async (req, res, next) => {
    try {
        const findPlayerCS = await playercsService.getPlayerCSByClubId(req.params.id)
        res.status(200).json(findPlayerCS)
    } catch (error) {
        next(error)
    }
}

const createPlayerCS = async (req, res, next) => {
    try {
        const {player, playercs} = req.body
        const newPlayerCS = await playercsService.createPlayerCS(player, playercs)
        res.status(200).json(newPlayerCS)
    } catch (error) {
        next(error)
    }
}
const editPlayerCS = async (req, res, next) => {
    try {
        const {player, playercs} = req.body
        console.log(player)
        console.log(playercs)
        const updatedPlayer = await playercsService.editPlayerCS(player, playercs)
        res.status(200).json(updatedPlayer)
    } catch (error) {
        next(error)
    }
}

const getPlayerCSByPositions = async (req, res, next) => {
    try {
        const {player_positions} = req.body
        const findPlayer = await playercsService.getPlayerCSByPositions(player_positions)
        res.status(200).json(findPlayer)
    } catch (error) {
        next(error)
    }
}

module.exports = {getPlayerCSById, getPlayerCSByPlayerId, getPlayerCSByClubId, createPlayerCS, editPlayerCS, getPlayerCSByPositions}