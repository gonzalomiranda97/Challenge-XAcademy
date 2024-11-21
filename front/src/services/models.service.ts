import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { lastValueFrom, Observable, take } from 'rxjs';
import {reqPlayer} from '../types';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})
export class ModelService {
    
    constructor(private http: HttpClient, private loginService: LoginService) {

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

    async editPlayer(p: reqPlayer) {
        const reqBody = {
            player: p.player,
            playercs: p.playercs
        }
        const headers = this.loginService.getHeaders()
        return await lastValueFrom(this.http.post('http://localhost:3000/api/playercs/edit', reqBody, {headers}).pipe(take(1)))
    }

    async createPlayer(p: reqPlayer) {
        const reqBody = {
            player: p.player,
            playercs: p.playercs
        }
        const headers = this.loginService.getHeaders()
        return await lastValueFrom(this.http.post('http://localhost:3000/api/playercs/create', reqBody, {headers}).pipe(take(1)))
    }

}