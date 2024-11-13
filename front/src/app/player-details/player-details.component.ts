import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Input() viewStats: boolean | undefined
  @Output() viewChange = new EventEmitter<boolean>()

  constructor(private playerDetailsService: PlayerDetailsService) {

  }

  ngOnInit(): void {
      this.playerDetailsService.selectedPlayer$.subscribe( (data) => {
        this.player = data
      })
  }

  showStats() {
    this.viewStats = !this.viewStats
    this.viewChange.emit(this.viewStats)
    console.log(this.viewStats)
  }

}
