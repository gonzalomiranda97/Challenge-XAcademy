import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Club, Player, PlayerCS } from "../types";
import { lastValueFrom, take } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    playerCSCollection: PlayerCS | PlayerCS[] = []

    constructor(private http: HttpClient) {

    }

    async getPlayerCSById(id: String) {
        try {
            const findPlayerCS = this.http.get<PlayerCS>(`http://localhost:3000/api/playercs/${id}`).pipe(take(1))
            return await lastValueFrom(findPlayerCS)
        } catch (error) {
            throw error
        }
    }

    async getPlayersByName(name: String) {
        const body = {
            long_name: name
        }
        try {
            const findPlayers = this.http.post<Player[]>(`http://localhost:3000/api/player/`, body).pipe(take(1))
            return await lastValueFrom(findPlayers)
        } catch (error) {
            throw error
        }
    }

    async getPlayersByClubName(name: String) {
        const body = {
            club_name: name
        }
        try {
            const findPlayers = this.http.post<Club[]>(`http://localhost:3000/api/club`, body).pipe(take(1))
            return await lastValueFrom(findPlayers)
        } catch (error) {
            throw error
        }
    }

    async getPlayerByPositions(positions: String) {
        const body = {
            player_positions: positions
        }
        try {
            const findPlayers = this.http.post<PlayerCS[]>(`http://localhost:3000/api/playercs/position`, body).pipe(take(1))
            return await lastValueFrom(findPlayers)
        } catch (error) {
            throw error
        }
    }


    
}