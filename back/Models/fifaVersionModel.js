const {DataTypes} = require('sequelize')
const {dbConfig} = require('../Config')

const fifaVersionModel = dbConfig.sequelize.define('FifaVersion', {
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true
    }
}, {
    timestamps: false
})

module.exports = fifaVersionModel