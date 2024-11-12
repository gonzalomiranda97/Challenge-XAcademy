import { Component, Input, OnInit } from '@angular/core';
import { PlayerCS } from '../../types';
import { PlayerDetailsService } from '../../services/playerDetails.service';
import { RadarChartComponent } from '../radar-chart/radar-chart.component';

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [RadarChartComponent],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.css'
})
export class PlayerDetailsComponent implements OnInit {

  player: PlayerCS | null = null

  viewStats: boolean = false

  constructor(private playerDetailsService: PlayerDetailsService) {

  }

  ngOnInit(): void {
      this.playerDetailsService.selectedPlayer$.subscribe( (data) => {
        this.player = data
      })
  }

  showStats() {
    if (!this.viewStats) {
      this.viewStats = true
    } else {
      this.viewStats = false
    }
  }



}
