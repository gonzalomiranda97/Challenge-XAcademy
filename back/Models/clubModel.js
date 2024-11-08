const {DataTypes} = require('sequelize')
const {sequelize} = require('../Config/dbConfig')

const clubModel = sequelize.define('Club', {
    league_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    league_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    league_level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    club_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    club_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = clubModel