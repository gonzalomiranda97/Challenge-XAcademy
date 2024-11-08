const {DataTypes} = require('sequelize')
const {dbConfig} = require('../Config')

const clubModel = dbConfig.sequelize.define('Club', {
    league_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    league_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    league_level: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    club_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    club_name: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
})

module.exports = clubModel