import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';

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

    

}