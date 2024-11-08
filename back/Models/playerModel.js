const {DataTypes} = require('sequelize')
const {sequelize} = require('../Config/dbConfig')

const playerModel = sequelize.define('Player', {
    player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    short_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    long_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nationality_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birth_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preferred_foot: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = playerModel