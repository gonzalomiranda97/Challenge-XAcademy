const {playerService} = require('../Services')

const getPlayerByName = async (req, res, next) => {
    try {
        const {long_name} = req.body
        console.log(long_name)
        const findPlayer = await playerService.getPlayerByName(long_name)
        res.status(200).json(findPlayer)
    } catch (error) {
        next(error)
    }
}

const playerExists = async (req, res, next) => {
    try {
        const exists = await playerService.playerExists(req.params.player_id)
        res.status(200).json(exists)
        return false
    } catch (error) {
        next(error)
    }
}

module.exports = {getPlayerByName, playerExists}