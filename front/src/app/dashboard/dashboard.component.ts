import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Club, Player, PlayerCS } from '../../types';
import { DashboardService } from '../../services/dashboard.service';
import { PlayerDetailsComponent } from '../player-details/player-details.component';
import { PlayerDetailsService } from '../../services/playerDetails.service';
import { FormCreateComponent } from '../form-create/form-create.component';
import { ClubToPlayerCS, PlayerToPlayerCS } from '../../formatFunctions';
import { nonEmptyStringValidator } from '../../validators';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, PlayerDetailsComponent, FormCreateComponent, EditFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  viewStats: boolean = false

  selectedPlayer: PlayerCS | null = null

  playerCSCollection: PlayerCS[] = []

  opt: number = 0

  searchByPlayerCSIdForm = new FormGroup({
    id: new FormControl('')
  })

  searchByPlayerNameForm: FormGroup;

  searchByClubNameForm: FormGroup;

  searchByPlayerPositionsForm: FormGroup;

  constructor(private dashboardService: DashboardService, private playerDetailsService: PlayerDetailsService, private fb: FormBuilder) {
    // Validadores sincronicos en el segundo parametro, y asincronicos en el tercero
    this.searchByPlayerNameForm = this.fb.group({
      name: ['', [Validators.required, nonEmptyStringValidator]]
    })
    this.searchByClubNameForm = this.fb.group({
      name: ['', [Validators.required, nonEmptyStringValidator]]
    })
    this.searchByPlayerPositionsForm = this.fb.group({
      positions: ['', [Validators.required, nonEmptyStringValidator]]
    })
  }

  async searchByPlayerCSId(id: String) {
    console.log('ejecutando searchByPlayerCSId')
    await this.dashboardService.getPlayerCSById(id)
    .then( (data: PlayerCS) => {
      console.log(data)
      this.playerCSCollection.push(data)
    })
  }

  async searchByPlayerName(name: String) {
    if (this.searchByPlayerNameForm.valid) {
      await this.dashboardService.getPlayersByName(name)
      .then( (data: Player[]) => {
        console.log(data)
        this.playerCSCollection = PlayerToPlayerCS(data)
      })
    }
  }

  async searchByClubName(name: String) {
    if (this.searchByClubNameForm.valid) {
      await this.dashboardService.getPlayersByClubName(name)
      .then( (data: Club[]) => {
        console.log(data)
        this.playerCSCollection = ClubToPlayerCS(data)
      })
    }
  }

  async searchByPlayerPositions(positions: String) {
    if (this.searchByPlayerPositionsForm.valid) {
      await this.dashboardService.getPlayerByPositions(positions)
      .then( (data: PlayerCS[]) => {
        console.log(data)
        this.playerCSCollection = data
      })
    } else {
      console.log('No puede enviar un valor vacio.')
    }
  }

  selectPlayer(player: PlayerCS) {
    this.selectedPlayer = player
    this.playerDetailsService.selectPlayer(player)
    if (this.viewStats) {
      this.viewStats = !this.viewStats
    }
  }

  viewChange(change: boolean) {
    this.viewStats = change
  }

  cleanTable(): void {
    this.playerCSCollection.length = 0
    this.selectedPlayer = null
    this.playerDetailsService.selectPlayer(null)
  }

  createPlayerOpt(): void {
    if (this.opt == 1) {
      this.opt = 0
    } else {
      this.opt = 1
    }
  }

  editPlayerOpt(opt: number) {
    if (opt == 2) {
      this.opt = opt
    } else {
      this.opt = 0
    }
  }

  

}