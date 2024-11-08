const fs = require('fs')
const csv = require('csv-parser')
const { sequelize } = require('./Config/dbConfig')
const { playerModel, clubModel, fifaVersionModel, playerClubSeasonModel } = require('./Models')


// Verificar valor dado que en el CSV hay celdas vacías, =NULL
const checkEmpty = (value) => {
    if (value == '') {
        return null
    }
    return value
}

// Dado que pueden haber jugadores sin club, se representa con el club de id=0
const checkEmptyClub = (value) => {
    if (value == '') {
        return 0
    }
    return value
}

const importData = async () => {
    
    const playersMap = {}
    const fifaVersionsMap = {}
    const clubsMap = {}

    const batchSize = 100 // Numero de filas por lote
    const rowBuffer = [] // Buffer para acumular filas

    await sequelize.sync({ force: true })

    const stream = fs.createReadStream('../male_players.csv')
        .pipe(csv())
    
    stream.on('data', async (row) => {
        rowBuffer.push(row) // Añadir la fila al buffer

        if (rowBuffer.length >= batchSize) {
            stream.pause() // Pausa el flujo para evitar nuevos datos

            await processBatch(rowBuffer, playersMap, fifaVersionsMap, clubsMap) // Procesa el lote actual
            rowBuffer.length = 0 // Vaciar el buffer

            stream.resume() // Reanudar el flujo de datos
        }
    })

    stream.on('end', async () => {
        if (rowBuffer.length > 0) {
            await processBatch(rowBuffer, playersMap, fifaVersionsMap, clubsMap) // Procesar el último lote
        }
        console.log('Datos importados correctamente.')
    })

    stream.on('error', (error) => {
        console.error('Error al procesar el CSV e importar los datos', error)
    })
}

// Función que procesa el lote
const processBatch = async (rows, playersMap, fifaVersionsMap, clubsMap) => {
    const playerClubSeasons = []

    for (const row of rows) {
        // Obtenemos o creamos, si no existe, la versión de FIFA
        const season = row['fifa_version']
        let fifaVersion = fifaVersionsMap[season]
        if (!fifaVersion) {
            fifaVersion = await fifaVersionModel.create({ year: season })
            fifaVersionsMap[season] = fifaVersion
        }

        // Obtenemos o creamos el club
        const clubId = checkEmptyClub(row['club_team_id'])
        let club = clubsMap[clubId]
        if (!club) {
            club = await clubModel.create({
                league_id: checkEmpty(row['league_id']),
                league_name: checkEmpty(row['league_name']),
                league_level: checkEmpty(row['league_level']),
                club_id: checkEmptyClub(row['club_team_id']),
                club_name: checkEmpty(row['club_name'])
            })
            clubsMap[clubId] = club
        }

        // Obtenemos o creamos el jugador
        const playerId = row['player_id']
        let player = playersMap[playerId]
        if (!player) {
            player = await playerModel.create({
                player_id: row['player_id'],
                short_name: row['short_name'],
                long_name: row['long_name'],
                nationality_id: row['nationality_id'],
                nationality_name: row['nationality_name'],
                birth_date: row['dob'],
                preferred_foot: row['preferred_foot']
            })
            playersMap[playerId] = player
        }

        // Almacena los datos para playerClubSeason
        playerClubSeasons.push({
            PlayerId: player.player_id,
            FifaVersionId: fifaVersion.year,
            ClubId: club.club_id,
            player_positions: checkEmpty(row['player_positions']),
            overall: row['overall'],
            potential: row['potential'],
            value: checkEmpty(row['value_eur']),
            wage: checkEmpty(row['wage_eur']),
            age: row['age'],
            height: row['height_cm'],
            weight: row['weight_kg'],
            club_position: checkEmpty(row['club_position']),
            club_jersey_number: checkEmpty(row['club_jersey_number']),
            club_loaned_from: checkEmpty(row['club_loaned_from']),
            club_joined_date: checkEmpty(row['club_joined_date']),
            club_contract_until_year: checkEmpty(row['club_contract_until_year']),
            nation_position: checkEmpty(row['nation_position']),
            nation_jersey_number: checkEmpty(row['nation_jersey_number']),
            weak_foot: row['weak_foot'],
            skill_moves: row['skill_moves'],
            international_reputation: row['international_reputation'],
            work_rate: row['work_rate'],
            body_type: row['body_type'],
            real_face: row['real_face'],
            release_clause: checkEmpty(row['release_clause']),
            player_tags: row['player_tags'],
            player_traits: row['player_traits'],
            player_face_url: row['player_face_url'],
            player_stats: {
                pace: row['pace'],
                shooting: row['shooting'],
                passing: row['passing'],
                dribbling: row['dribbling'],
                defending: row['defending'],
                physic: row['physic'],
                attacking_crossing: row['attacking_crossing'],
                attacking_finishing: row['attacking_finishing'],
                attacking_heading_accuracy: row['attacking_heading_accuracy'],
                attacking_short_passing: row['attacking_short_passing'],
                attacking_volleys: row['attacking_volleys'],
                skill_dribbling: row['skill_dribbling'],
                skill_curve: row['skill_curve'],
                skill_fk_accuracy: row['skill_fk_accuracy'],
                skill_long_passing: row['skill_long_passing'],
                skill_ball_control: row['skill_ball_control'],
                movement_acceleration: row['movement_acceleration'],
                movement_sprint_speed: row['movement_sprint_speed'],
                movement_agility: row['movement_agility'],
                movement_reactions: row['movement_reactions'],
                movement_balance: row['movement_balance'],
                power_shot_power: row['power_shot_power'],
                power_jumping: row['power_jumping'],
                power_stamina: row['power_stamina'],
                power_strength: row['power_strength'],
                power_long_shots: row['power_long_shots'],
                mentality_aggression: row['mentality_aggression'],
                mentality_interceptions: row['mentality_interceptions'],
                mentality_positioning: row['mentality_positioning'],
                mentality_vision: row['mentality_vision'],
                mentality_penalties: row['mentality_penalties'],
                mentality_composure: row['mentality_composure'],
                defending_marking_awareness: row['defending_marking_awareness'],
                defending_standing_tackle: row['defending_standing_tackle'],
                defending_sliding_tackle: row['defending_sliding_tackle'],
                goalkeeping_diving: row['goalkeeping_diving'],
                goalkeeping_handling: row['goalkeeping_handling'],
                goalkeeping_kicking: row['goalkeeping_kicking'],
                goalkeeping_positioning: row['goalkeeping_positioning'],
                goalkeeping_reflexes: row['goalkeeping_reflexes'],
                goalkeeping_speed: row['goalkeeping_speed'],
            }
        })
    } // fin bucle
    // Inserta todos los registros de playerClubSeason en un solo lote
    await playerClubSeasonModel.bulkCreate(playerClubSeasons)
}
importData()