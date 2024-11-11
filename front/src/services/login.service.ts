import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {User} from '../types'
import { lastValueFrom, take} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    currentUser: User = {
        username: 'valor predeterminado desde service',
        email: 'valor predeterminado desde service',
        token: 'valor predeterminado desde service'
    }

    isLogged: boolean = false;

    constructor(private http: HttpClient) {

    }

    getCurrentUser() {
        return this.currentUser
    }

    setCurrentUser(user: User) {
        this.currentUser = user
        this.setIsLogged(true)
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