import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PlayerCS } from "../types";
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
    
}