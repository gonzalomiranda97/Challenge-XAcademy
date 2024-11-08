const {DataTypes} = require('sequelize')
const {sequelize} = require('../Config/dbConfig')

const fifaVersionModel = sequelize.define('FifaVersion', {
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