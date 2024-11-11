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

module.exports = {getClubByName}