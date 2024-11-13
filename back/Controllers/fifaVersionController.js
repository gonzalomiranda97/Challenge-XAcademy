const {fifaVersionService} = require('../Services')

const getVersionByYear = async (req, res, next) => {
    try {
        const findVersion = await fifaVersionService.getFifaByVersion(req.params.year)
        res.status(200).json(findVersion)
    } catch (error) {
        next(error)
    }

}

const fifaVersionExists = async (req, res, next) => {
    try {
        const exists = await fifaVersionService.fifaVersionExists(req.params.year)
        res.status(200).json(exists)
    } catch (error) {
        next(error)
    }
}

module.exports = {getVersionByYear, fifaVersionExists}