import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PlayerCS } from '../../types';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  playerCSCollection: PlayerCS[] = []

  searchByPlayerCSIdForm = new FormGroup({
    id: new FormControl('')
  })

  constructor(private dashboardService: DashboardService) {

  }

  async searchByPlayerCSId(id: String) {
    console.log('ejecutando searchByPlayerCSId')
    await this.dashboardService.getPlayerCSById(id)
    .then( (data: PlayerCS) => {
      console.log(data)
      this.playerCSCollection.push(data)
    })
  }
}
