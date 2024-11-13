const {fifaVersionModel} = require('../Models')

const getFifaByVersion = async (year) => {
    try {
        const findVersion = await fifaVersionModel.findOne({
            where: {
                year: year
            },
            include: {
                all: true,
                limit: 100
            },
        })
        if (!findVersion) {
            const error = new Error()
            error.message = `Error al obtener la version con year=${year}`
            error.statusCode = 404
            throw error
        }
        return findVersion   
    } catch (error) {
        throw error
    }
}

const fifaVersionExists = async (year) => {
    try {
        const findVersion = await fifaVersionModel.findByPk(year)
        if (findVersion) {
            return true
        }
        return false
    } catch (error) {
        throw error
    }
}

module.exports = {getFifaByVersion, fifaVersionExists}