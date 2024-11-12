import {Injectable} from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import {PlayerCS} from '../types'

@Injectable({
    providedIn: 'root'
})
export class PlayerDetailsService {

    private selectedPlayer: BehaviorSubject<PlayerCS | null> = new BehaviorSubject<PlayerCS | null>(null)

    selectedPlayer$ = this.selectedPlayer.asObservable()
    
    constructor() {

    }

    selectPlayer(player: PlayerCS | null) {
        this.selectedPlayer.next(player)
    }

    
}