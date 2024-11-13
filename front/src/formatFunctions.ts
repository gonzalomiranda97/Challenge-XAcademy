import { Player, PlayerCS } from "./types";

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

