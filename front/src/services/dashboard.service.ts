import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Club, Player, PlayerCS } from "../types";
import { lastValueFrom, take } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    playerCSCollection: PlayerCS | PlayerCS[] = []

    constructor(private http: HttpClient, private loginService: LoginService) {

    }

    async getPlayerCSById(id: String) {
        const headers = this.loginService.getHeaders()
        try {
            const findPlayerCS = this.http.get<PlayerCS>(`http://localhost:3000/api/playercs/${id}`, {headers}).pipe(take(1))
            return await lastValueFrom(findPlayerCS)
        } catch (error) {
            throw error
        }
    }

    async getPlayersByName(name: String) {
        const body = {
            long_name: name
        }
        const headers = this.loginService.getHeaders()
        try {
            const findPlayers = this.http.post<Player[]>(`http://localhost:3000/api/player/`, body, {headers}).pipe(take(1))
            return await lastValueFrom(findPlayers)
        } catch (error) {
            throw error
        }
    }

    async getPlayersByClubName(name: String) {
        const body = {
            club_name: name
        }
        const headers = this.loginService.getHeaders()
        try {
            const findPlayers = this.http.post<Club[]>(`http://localhost:3000/api/club`, body, {headers}).pipe(take(1))
            return await lastValueFrom(findPlayers)
        } catch (error) {
            throw error
        }
    }

    async getPlayerByPositions(positions: String) {
        const body = {
            player_positions: positions
        }
        const headers = this.loginService.getHeaders()
        try {
            const findPlayers = this.http.post<PlayerCS[]>(`http://localhost:3000/api/playercs/position`, body, {headers}).pipe(take(1))
            return await lastValueFrom(findPlayers)
        } catch (error) {
            throw error
        }
    }

    async getPlayersByPlayerId(player_id: number) {
        const headers = this.loginService.getHeaders()
        try {
            const findPlayers = this.http.get<Player>(`http://localhost:3000/api/player/${player_id}`, {headers}).pipe(take(1))
            return await lastValueFrom(findPlayers)
        } catch (error) {
            throw error
        }
    }

    
}