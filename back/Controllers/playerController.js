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

module.exports = {getPlayerByName}