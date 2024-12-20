export type User = {
    username: string | null,
    email: string | null,
    token: string | null
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

export type Club = {
    league_id: String,
    league_name: String,
    league_level: number,
    club_id: number
    club_name: String,
    PlayerClubSeasons: []
}

export type reqPlayer = { 
    player: {
        player_id: number,
        short_name: String,
        long_name: String,
        nationality_id: number,
        nationality_name: String,
        birth_date: String,
        preferred_foot: String
        },
    playercs: {
        id?: number,
        PlayerId?: number,
        FifaVersionId?: number,
        ClubId?: number,
        player_positions: String,
        overall: number,
        potential: number,
        value: number,
        wage: number,
        age: number,
        height: number,
        weight: number,
        club_position: String,
        club_jersey_number: number,
        club_loaned_from: number,
        club_joined_date: number,
        club_contract_until_year: number,
        nation_position: number,
        nation_jersey_number: number,
        weak_foot: String,
        skill_moves: String,
        international_reputation: number,
        work_rate: String,
        body_type: String,
        real_face: String,
        release_clause: number,
        player_tags: String,
        player_traits: String,
        player_face_url: String,
        player_stats: {
            pace: number,
            shooting: number,
            passing: number,
            dribbling: number,
            defending: number,
            physic: number,
            attacking_crossing: number,
            attacking_finishing: number,
            attacking_heading_accuracy: number,
            attacking_short_passing: number,
            attacking_volleys: number,
            skill_dribbling: number,
            skill_curve: number,
            skill_fk_accuracy: number,
            skill_long_passing: number,
            skill_ball_control: number,
            movement_acceleration: number,
            movement_sprint_speed: number,
            movement_agility: number,
            movement_reactions: number,
            movement_balance: number,
            power_shot_power: number,
            power_jumping: number,
            power_stamina: number,
            power_strength: number,
            power_long_shots: number,
            mentality_aggression: number,
            mentality_interceptions: number,
            mentality_positioning: number,
            mentality_vision: number,
            mentality_penalties: number,
            mentality_composure: number,
            defending_marking_awareness: number,
            defending_standing_tackle: number,            
            defending_sliding_tackle: number,
            goalkeeping_diving: number,
            goalkeeping_handling: number,
            goalkeeping_kicking: number,
            goalkeeping_positioning: number,
            goalkeeping_reflexes: number,
            goalkeeping_speed: number
            }
        }
}

export type keyValue<K, V> = [K, V]