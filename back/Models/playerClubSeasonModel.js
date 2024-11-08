const {DataTypes} = require('sequelize')
const {sequelize} = require('../Config/dbConfig')

const playerClubSeasonModel = sequelize.define('PlayerClubSeason', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PlayerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Players',
            key: 'player_id'
        },
        unique: false
    },
    FifaVersionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'FifaVersions',
            key: 'year'
        },
        unique: false
    },
    ClubId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Clubs',
            key: 'club_id'
        },
        unique: false
    },
    player_positions: {
        type: DataTypes.STRING,
        allowNull: false
    },
    overall: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    potential: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    wage: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    club_position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    club_jersey_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    club_loaned_from: {
        type: DataTypes.STRING,
        allowNull: true
    },
    club_joined_date: {
        type: DataTypes.STRING,
        allowNull: true
    },
    club_contract_until_year: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nation_position: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nation_jersey_number: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    weak_foot: {
        type: DataTypes.STRING,
        allowNull: false
    },
    skill_moves: {
        type: DataTypes.STRING,
        allowNull: false
    },
    international_reputation: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    work_rate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    real_face: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release_clause: {
        type: DataTypes.STRING,
        allowNull: true
    },
    player_tags: {
        type: DataTypes.STRING,
        allowNull: true
    },
    player_traits: {
        type: DataTypes.STRING,
        allowNull: true
    },
    player_face_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    player_stats: {
        type: DataTypes.JSON,
        allowNull: false
    }
}, {
    timestamps: false,
    indexes: [
        {
            fields: ['Player_id', 'FifaVersionId', "ClubId"],
            unique: true,
            name: 'player_club_season_unique_key'
        }
    ]
})

module.exports = playerClubSeasonModel