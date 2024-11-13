export type User = {
    username: String | null,
    email: String | null,
    token: String | null
}

export type PlayerCS = {
    id: number,
    PlayerId: number,
    FifaVersionId: number,
    ClubId: number,
    player_positions: String,
    overall: number,
    potential: number,
    value: number | null,
    wage: number | null,
    age: number | null,
    height: number,
    weight: number,
    club_position: String | null,
    club_jersey_number: number | null,
    club_loaned_from: String | null,
    club_joined_date: String | null,
    club_contract_until_year: String | null,
    nation_position: String | null,
    nation_jersey_number: number | null,
    weak_foot: String,
    skill_moves: String,
    international_reputation: number,
    work_rate: String,
    body_type: String,
    real_face: String,
    release_clause: number | null,
    player_tags: String | null,
    player_traits: String | null,
    player_face_url: String | null,
    player_stats: Stats
    Player: {
        player_id: number,
        short_name: string,
        long_name: String,
        nationality_id: String,
        nationality_name: String,
        birth_date: String,
        preferred_foot: String,
    }
    Club: {
        league_id: String,
        league_name: String,
        league_level: number,
        club_id: number
        club_name: String
    }
}

export type Stats = {
    pace: number;
    physic: number;
    passing: number;
    shooting: number;
    defending: number;
    dribbling: number;
    skill_curve: number;
    power_jumping: number;
    power_stamina: number;
    power_strength: number;
    skill_dribbling: number;
    mentality_vision: number;
    movement_agility: number;
    movement_balance: number;
    power_long_shots: number;
    power_shot_power: number;
    attacking_volleys: number;
    goalkeeping_speed: number;
    skill_fk_accuracy: number;
    attacking_crossing: number;
    goalkeeping_diving: number;
    movement_reactions: number;
    skill_ball_control: number;
    skill_long_passing: number;
    attacking_finishing: number;
    goalkeeping_kicking: number;
    mentality_composure: number;
    mentality_penalties: number;
    goalkeeping_handling: number;
    goalkeeping_reflexes: number;
    mentality_aggression: number;
    mentality_positioning: number;
    movement_acceleration: number;
    movement_sprint_speed: number;
    attacking_short_passing: number;
    goalkeeping_positioning: number;
    mentality_interceptions: number;
    defending_sliding_tackle: number;
    defending_standing_tackle: number;
    attacking_heading_accuracy: number;
    defending_marking_awareness: number;
}

export type Player = {
    player_id: number,
    short_name: string,
    long_name: String,
    nationality_id: String,
    nationality_name: String,
    birth_date: String,
    preferred_foot: String,
    PlayerClubSeasons: []
}
