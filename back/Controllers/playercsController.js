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

module.exports = {getPlayerCSById, getPlayerCSByPlayerId, getPlayerCSByClubId}