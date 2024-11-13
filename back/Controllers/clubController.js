const {clubService} = require('../Services')

const getClubByName = async (req, res, next) => {
    try {
        const {club_name} = req.body
        const findClub = await clubService.getClubByName(club_name)
        res.status(200).json(findClub)
    } catch (error) {
        next(error)
    }
}

const getClubById = async (req, res, next) => {
    try {
        const findClub = await clubService.getClubById(req.params.id)
        res.status(200).json(findClub)
    } catch (error) {
        next(error)
    }
}

const clubExists = async (req, res, next) => {
    try {
        const exists = await clubService.clubExists(req.params.id)
        res.status(200).json(exists)
    } catch (error) {
        next(error)
    }
}

module.exports = {getClubByName, getClubById, clubExists}