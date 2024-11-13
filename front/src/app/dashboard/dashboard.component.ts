import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PlayerCS } from '../../types';
import { DashboardService } from '../../services/dashboard.service';
import { PlayerDetailsComponent } from '../player-details/player-details.component';
import { PlayerDetailsService } from '../../services/playerDetails.service';
import { FormCreateComponent } from '../form-create/form-create.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, PlayerDetailsComponent, FormCreateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  viewStats: boolean = false

  selectedPlayer: PlayerCS | null = null

  playerCSCollection: PlayerCS[] = []

  searchByPlayerCSIdForm = new FormGroup({
    id: new FormControl('')
  })

  constructor(private dashboardService: DashboardService, private playerDetailsService: PlayerDetailsService) {

  }

  async searchByPlayerCSId(id: String) {
    console.log('ejecutando searchByPlayerCSId')
    await this.dashboardService.getPlayerCSById(id)
    .then( (data: PlayerCS) => {
      console.log(data)
      this.playerCSCollection.push(data)
    })
  }

  selectPlayer(player: PlayerCS) {
    this.selectedPlayer = player
    this.playerDetailsService.selectPlayer(player)
    console.log(this.viewStats)
    if (this.viewStats) {
      this.viewStats = !this.viewStats
    }
    console.log(this.viewStats)
  }

  viewChange(change: boolean) {
    this.viewStats = change
  }

  
}
