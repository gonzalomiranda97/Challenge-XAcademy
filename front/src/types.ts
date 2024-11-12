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
    player_stats: {}
    Player: {
        short_name: String,
        nationality_name: String
    }
    Club: {
        club_name: String
    }
}