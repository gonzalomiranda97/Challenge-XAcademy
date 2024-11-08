const playerModel = require('./playerModel')
const fifaVersionModel = require('./fifaVersionModel')
const clubModel = require('./clubModel')
const playerClubSeasonModel = require('./playerClubSeasonModel')

playerModel.hasMany(playerClubSeasonModel, {foreignKey: 'PlayerId'})
playerClubSeasonModel.belongsTo(playerModel, {foreignKey: 'PlayerId'})

fifaVersionModel.hasMany(playerClubSeasonModel, {foreignKey: 'FifaVersionId'})
playerClubSeasonModel.belongsTo(fifaVersionModel, {foreignKey: 'FifaVersionId'})

clubModel.hasMany(playerClubSeasonModel, {foreignKey: 'ClubId'})
playerClubSeasonModel.belongsTo(clubModel, {foreignKey: 'ClubId'})

module.exports = {playerModel, fifaVersionModel, clubModel, playerClubSeasonModel}