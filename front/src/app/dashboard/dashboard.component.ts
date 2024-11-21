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
import * as XLSX from 'xlsx'
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, PlayerDetailsComponent, FormCreateComponent, EditFormComponent, TimelineComponent],
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

  searchByPlayerIdForm: FormGroup;

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
    this.searchByPlayerIdForm = this.fb.group({
      player_id: ['', [Validators.required, nonEmptyStringValidator]]
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

  async searchByPlayerId(player_id: number) {
    if (this.searchByPlayerIdForm.valid) {
      await this.dashboardService.getPlayersByPlayerId(player_id)
      .then( (data: Player) => {
        this.playerCSCollection = PlayerToPlayerCS([data])
        this.opt = 3
      })
    }
  }

  selectPlayer(player: PlayerCS) {
    this.selectedPlayer = player
    this.playerDetailsService.selectPlayer(player)
    if (this.viewStats) {
      this.viewStats = !this.viewStats
    }
    this.opt = 0
  }

  viewChange(change: boolean) {
    this.viewStats = change
  }

  cleanTable(): void {
    this.playerCSCollection.length = 0
    this.selectedPlayer = null
    this.playerDetailsService.selectPlayer(null)
    this.viewStats = false
    this.opt = 0
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

  exportPlayerCSCollection() {
    const transformedCollection = this.playerCSCollection.map( player => {
      const flatCollection: Record<string, any> = {...player}

      if (player.FifaVersionId) {
        flatCollection[`fifa_version`] = player.FifaVersionId
      }

      if (player.Player) {
        for (const item in player.Player) {
          if (player.Player.hasOwnProperty(item)) {
            if (item == 'date_of_birth') {
              flatCollection['dob'] = (player.Player as any)[item]
            } else {
              flatCollection[`${item}`] = (player.Player as any)[item]
            } 
          }
        }
      }

      if (player.Club) {
        for (const item in player.Club) {
          if (player.Club.hasOwnProperty(item)) {
            flatCollection[`${item}`] = (player.Club as any)[item]
          }
        }
      }
      
      if (player.player_stats) {
        for (const stat in player.player_stats) {
          if (player.player_stats.hasOwnProperty(stat)) {
            flatCollection[`${stat}`] = (player.player_stats as any)[stat]
          }
        }
      }

      delete flatCollection['player_stats']
      delete flatCollection['Player']
      delete flatCollection['Club']
      delete flatCollection['PlayerId']
      delete flatCollection['ClubId']
      delete flatCollection['FifaVersionId']
      return flatCollection
    })
    console.log(transformedCollection)

    const worksheet = XLSX.utils.json_to_sheet(transformedCollection)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Players Table")
    XLSX.writeFile(workbook, 'exportedTable.csv')
  }

}