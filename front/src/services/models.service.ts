import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { lastValueFrom, Observable, take } from 'rxjs';
import { reqCPlayer, reqEPlayer} from '../types';

@Injectable({
    providedIn: 'root'
})
export class ModelService {
    
    constructor(private http: HttpClient) {

    }

    clubExists(clubId: number): Observable<boolean> {
        return this.http.get<boolean>(`http://localhost:3000/api/club/${clubId}/exists`)
    }

    fifaVersionExists(year: number): Observable<boolean> {
        return this.http.get<boolean>(`http://localhost:3000/api/fifaversion/${year}/exists`)
    }

    playerExists(playerId: number): Observable<boolean> {
        return this.http.get<boolean>(`http://localhost:3000/api/player/${playerId}/exists`)
    }

    async editPlayer(p: reqEPlayer) {
        const reqBody = {
            player: p.player,
            playercs: p.playercs
        }
        return await lastValueFrom(this.http.post('http://localhost:3000/api/playercs/edit', reqBody).pipe(take(1)))
    }

    async createPlayer(p: reqCPlayer) {
        const reqBody = {
            player: p.player,
            playercs: p.playercs
        }
        return await lastValueFrom(this.http.post('http://localhost:3000/api/playercs/create', reqBody).pipe(take(1)))
    }

}