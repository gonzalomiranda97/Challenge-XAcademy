import { Component, Input, OnInit } from '@angular/core';
import { keyValue, PlayerCS } from '../../types';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TimelineChartComponent } from '../timeline-chart/timeline-chart.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [ReactiveFormsModule, TimelineChartComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements OnInit {

  @Input() playersCollection: PlayerCS[] = []

  playersStats: keyValue<string, number>[][]

  timelineData: keyValue<string, number>[] | undefined

  playerName: String | undefined

  selectStatToTimelineForm: FormGroup

  viewTimeline: boolean = false

  constructor(private fb: FormBuilder) {
    this.playersStats = []
    this.selectStatToTimelineForm = this.fb.group({
      stat: ['', [Validators.required, Validators.min(0), Validators.max(40)]]
    })
  }

  ngOnInit(): void {
      for (const player of this.playersCollection) {
        const stats: keyValue<string, number>[] = []
        for (const [key, value] of Object.entries(player.player_stats)) {
          console.log(`${key} ${value}`)
          stats.push([key, value])
        }
        console.log(stats)
        this.playersStats.push(stats)
      }
      console.log(this.playersStats)
      this.playerName = this.playersCollection[0].Player.long_name

  }

  selectStatToTimeline(stat: number) {
    if (this.selectStatToTimelineForm.valid) {
      if (this.viewTimeline) {
        this.viewTimeline = false
      } else {
        console.log(`Stat: ${stat}`)
        this.selectStat(this.playersStats, stat)
        this.viewTimeline = true
      }
    } else {
      console.log('Formulario inválido. Debe ser un número entre 0 y 40')
    }

  }

  selectStat(playersStats: keyValue<string, number>[][], n: number) {
    const data: keyValue<string, number>[] = []
    for (const player of playersStats) {
      data.push(player[n])
    }
    this.timelineData = data
    console.log(this.timelineData)
  }
}
