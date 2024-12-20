import { Club, Player, PlayerCS, reqPlayer} from "./types";

export function PlayerToPlayerCS(players: Player[]): PlayerCS[] {
    return players.flatMap( (p: Player) => {
        return p.PlayerClubSeasons.map( (pcs: PlayerCS) => ({
            id: pcs.id,
            PlayerId: pcs.PlayerId,
            FifaVersionId: pcs.FifaVersionId,
            ClubId: pcs.ClubId,
            player_positions: pcs.player_positions,
            overall: pcs.overall,
            potential: pcs.potential,
            value: pcs.value,
            wage: pcs.wage,
            age: pcs.age,
            height: pcs.height,
            weight: pcs.weight,
            club_position: pcs.club_position,
            club_jersey_number: pcs.club_jersey_number,
            club_loaned_from: pcs.club_loaned_from,
            club_joined_date: pcs.club_joined_date,
            club_contract_until_year: pcs.club_contract_until_year,
            nation_position: pcs.nation_position,
            nation_jersey_number: pcs.nation_jersey_number,
            weak_foot: pcs.weak_foot,
            skill_moves: pcs.skill_moves,
            international_reputation: pcs.international_reputation,
            work_rate: pcs.work_rate,
            body_type: pcs.body_type,
            real_face: pcs.real_face,
            release_clause: pcs.release_clause,
            player_tags: pcs.player_tags,
            player_traits: pcs.player_traits,
            player_face_url: pcs.player_face_url,
            player_stats: pcs.player_stats,
            Player: {
                player_id: p.player_id,
                short_name: p.short_name,
                long_name: p.long_name,
                nationality_id: p.nationality_id,
                nationality_name: p.nationality_name,
                birth_date: p.birth_date,
                preferred_foot: p.preferred_foot,
            },
            Club: {
                league_id: pcs.Club.league_id,
                league_name: pcs.Club.league_name,
                league_level: pcs.Club.league_level,
                club_id: pcs.Club.club_id,
                club_name: pcs.Club.club_name
            }
        }))
    })
}

export function ClubToPlayerCS(clubs: Club[]): PlayerCS[] {
    return clubs.flatMap( (c: Club) => {
        return c.PlayerClubSeasons.map( (pcs: PlayerCS) => ({
            id: pcs.id,
            PlayerId: pcs.PlayerId,
            FifaVersionId: pcs.FifaVersionId,
            ClubId: pcs.ClubId,
            player_positions: pcs.player_positions,
            overall: pcs.overall,
            potential: pcs.potential,
            value: pcs.value,
            wage: pcs.wage,
            age: pcs.age,
            height: pcs.height,
            weight: pcs.weight,
            club_position: pcs.club_position,
            club_jersey_number: pcs.club_jersey_number,
            club_loaned_from: pcs.club_loaned_from,
            club_joined_date: pcs.club_joined_date,
            club_contract_until_year: pcs.club_contract_until_year,
            nation_position: pcs.nation_position,
            nation_jersey_number: pcs.nation_jersey_number,
            weak_foot: pcs.weak_foot,
            skill_moves: pcs.skill_moves,
            international_reputation: pcs.international_reputation,
            work_rate: pcs.work_rate,
            body_type: pcs.body_type,
            real_face: pcs.real_face,
            release_clause: pcs.release_clause,
            player_tags: pcs.player_tags,
            player_traits: pcs.player_traits,
            player_face_url: pcs.player_face_url,
            player_stats: pcs.player_stats,
            Player: {
                player_id: pcs.Player.player_id,
                short_name: pcs.Player.short_name,
                long_name: pcs.Player.long_name,
                nationality_id: pcs.Player.nationality_id,
                nationality_name: pcs.Player.nationality_name,
                birth_date: pcs.Player.birth_date,
                preferred_foot: pcs.Player.preferred_foot,
            },
            Club: {
                league_id: c.league_id,
                league_name: c.league_name,
                league_level: c.league_level,
                club_id: c.club_id,
                club_name: c.club_name
            }
        }))
    })
}

export function formatEditFormValues(player_id: number, playercs_id: number, data: any) {
    const p: reqPlayer = {
        player: {
            player_id: player_id,
            short_name: data.short_name,
            long_name: data.long_name,
            nationality_id: data.nationality_id,
            nationality_name: data.nationality_name,
            birth_date: data.birth_date,
            preferred_foot: data.preferred_foot
        },
        playercs: {
            id: playercs_id,
            player_positions: data.player_positions,
            overall: data.overall,
            potential: data.potential,
            value: data.value,
            wage: data.wage,
            age: data.age,
            height: data.height,
            weight: data.weight,
            club_position: data.club_position,
            club_jersey_number: data.club_jersey_number,
            club_loaned_from: data.club_loaned_from,
            club_joined_date: data.club_joined_date,
            club_contract_until_year: data.club_contract_until_year,
            nation_position: data.nation_position,
            nation_jersey_number: data.nation_jersey_number,
            weak_foot: data.weak_foot,
            skill_moves: data.skill_moves,
            international_reputation: data.international_reputation,
            work_rate: data.work_rate,
            body_type: data.body_type,
            real_face: data.real_face,
            release_clause: data.release_clause,
            player_tags: data.player_tags,
            player_traits: data.player_traits,
            player_face_url: data.player_face_url,
            player_stats: {
                pace: data.pace,
                shooting: data.shooting,
                passing: data.passing,
                dribbling: data.dribbling,
                defending: data.defending,
                physic: data.physic,
                attacking_crossing: data.attacking_crossing,
                attacking_finishing: data.attacking_finishing,
                attacking_heading_accuracy: data.attacking_heading_accuracy,
                attacking_short_passing: data.attacking_short_passing,
                attacking_volleys: data.attacking_volleys,
                skill_dribbling: data.skill_dribbling,
                skill_curve: data.skill_curve,
                skill_fk_accuracy: data.skill_fk_accuracy,
                skill_long_passing: data.skill_long_passing,
                skill_ball_control: data.skill_ball_control,
                movement_acceleration: data.movement_acceleration,
                movement_sprint_speed: data.movement_sprint_speed,
                movement_agility: data.movement_agility,
                movement_balance: data.movement_balance,
                movement_reactions: data.movement_reactions,
                power_shot_power: data.power_shot_power,
                power_jumping: data.power_jumping,
                power_stamina: data.power_stamina,
                power_strength: data.power_strength,
                power_long_shots: data.power_long_shots,
                mentality_aggression: data.mentality_aggression,
                mentality_interceptions: data.mentality_interceptions,
                mentality_positioning: data.mentality_positioning,
                mentality_vision: data.mentality_vision,
                mentality_penalties: data.mentality_penalties,
                mentality_composure: data.mentality_composure,
                defending_marking_awareness: data.defending_marking_awareness,
                defending_standing_tackle: data.defending_standing_tackle,
                defending_sliding_tackle: data.defending_sliding_tackle,
                goalkeeping_diving: data.goalkeeping_diving,
                goalkeeping_handling: data.goalkeeping_handling,
                goalkeeping_kicking: data.goalkeeping_kicking,
                goalkeeping_positioning: data.goalkeeping_positioning,
                goalkeeping_reflexes: data.goalkeeping_reflexes,
                goalkeeping_speed: data.goalkeeping_speed
            }
        }
    }
    return p
}

export function formatCreateFormValues(data: any) {
    const p: reqPlayer = {
        player: {
            player_id: data.player_id,
            short_name: data.short_name,
            long_name: data.long_name,
            nationality_id: data.nationality_id,
            nationality_name: data.nationality_name,
            birth_date: data.birth_date,
            preferred_foot: data.preferred_foot
        },
        playercs: {
            PlayerId: data.player_id,
            FifaVersionId: data.FifaVersionId,
            ClubId: data.ClubId,
            player_positions: data.player_positions,
            overall: data.overall,
            potential: data.potential,
            value: data.value,
            wage: data.wage,
            age: data.age,
            height: data.height,
            weight: data.weight,
            club_position: data.club_position,
            club_jersey_number: data.club_jersey_number,
            club_loaned_from: data.club_loaned_from,
            club_joined_date: data.club_joined_date,
            club_contract_until_year: data.club_contract_until_year,
            nation_position: data.nation_position,
            nation_jersey_number: data.nation_jersey_number,
            weak_foot: data.weak_foot,
            skill_moves: data.skill_moves,
            international_reputation: data.international_reputation,
            work_rate: data.work_rate,
            body_type: data.body_type,
            real_face: data.real_face,
            release_clause: data.release_clause,
            player_tags: data.player_tags,
            player_traits: data.player_traits,
            player_face_url: data.player_face_url,
            player_stats: {
                pace: data.pace,
                shooting: data.shooting,
                passing: data.passing,
                dribbling: data.dribbling,
                defending: data.defending,
                physic: data.physic,
                attacking_crossing: data.attacking_crossing,
                attacking_finishing: data.attacking_finishing,
                attacking_heading_accuracy: data.attacking_heading_accuracy,
                attacking_short_passing: data.attacking_short_passing,
                attacking_volleys: data.attacking_volleys,
                skill_dribbling: data.skill_dribbling,
                skill_curve: data.skill_curve,
                skill_fk_accuracy: data.skill_fk_accuracy,
                skill_long_passing: data.skill_long_passing,
                skill_ball_control: data.skill_ball_control,
                movement_acceleration: data.movement_acceleration,
                movement_sprint_speed: data.movement_sprint_speed,
                movement_agility: data.movement_agility,
                movement_balance: data.movement_balance,
                movement_reactions: data.movement_reactions,
                power_shot_power: data.power_shot_power,
                power_jumping: data.power_jumping,
                power_stamina: data.power_stamina,
                power_strength: data.power_strength,
                power_long_shots: data.power_long_shots,
                mentality_aggression: data.mentality_aggression,
                mentality_interceptions: data.mentality_interceptions,
                mentality_positioning: data.mentality_positioning,
                mentality_vision: data.mentality_vision,
                mentality_penalties: data.mentality_penalties,
                mentality_composure: data.mentality_composure,
                defending_marking_awareness: data.defending_marking_awareness,
                defending_standing_tackle: data.defending_standing_tackle,
                defending_sliding_tackle: data.defending_sliding_tackle,
                goalkeeping_diving: data.goalkeeping_diving,
                goalkeeping_handling: data.goalkeeping_handling,
                goalkeeping_kicking: data.goalkeeping_kicking,
                goalkeeping_positioning: data.goalkeeping_positioning,
                goalkeeping_reflexes: data.goalkeeping_reflexes,
                goalkeeping_speed: data.goalkeeping_speed
            }
        }
    }
    return p
}