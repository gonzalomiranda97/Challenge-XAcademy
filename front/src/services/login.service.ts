import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {User} from '../types'
import { lastValueFrom, take} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    currentUser: User | null = null

    isLogged: boolean = false;

    constructor(private http: HttpClient) {

    }

    getCurrentUser() {
        return this.currentUser
    }

    getUserToken() {
        return this.currentUser?.token
    }

    getHeaders() {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.getUserToken()}`,
            'Content-Type': 'application/json'
        })
        return headers
    }

    setCurrentUser(user: User | null) {
        this.currentUser = user
        if (this.currentUser?.token) {
            this.setIsLogged(true)
        } else {
            this.setIsLogged(false)
        }
    }
    
    private setIsLogged(bool: boolean) {
        this.isLogged = bool
    }

    async login(email: String | null, password: String | null) {
        try {
            const body = {
                email: email,
                password: password
            }
            console.log(body)
            const obs = this.http.post<User>('http://localhost:3000/api/login', body).pipe(take(1))
            return await lastValueFrom(obs)
        } catch (error) {
            throw error
        }
    }

    async signUp(username: String | null, email: String | null, password: String | null) {
        try {
            const body = {
                username: username,
                email: email,
                password: password
            }
            console.log(body)
            const obs = this.http.post<User>('http://localhost:3000/api/user/create', body).pipe(take(1))
            return await lastValueFrom(obs)
        } catch (error) {
            throw error
        }
    }




}