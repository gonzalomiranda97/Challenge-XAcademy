import { Component, Input, OnInit } from '@angular/core';
import { CategoryScale, Chart, ChartConfiguration, Filler, Legend, LinearScale, LineController, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { keyValue } from '../../types';

@Component({
  selector: 'app-timeline-chart',
  standalone: true,
  imports: [],
  templateUrl: './timeline-chart.component.html',
  styleUrl: './timeline-chart.component.css'
})
export class TimelineChartComponent implements OnInit {

  @Input() timelineData: keyValue<string, number>[] | undefined

  @Input() playerName: String | undefined

  timelineChart: Chart | undefined

  labels = ['Fifa 15', 'Fifa 16', 'Fifa 17', 'Fifa 18', 'Fifa 19', 'Fifa 20', 'Fifa 21', 'Fifa 22', 'Fifa 23']
  
  createTimeline() {
    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.timelineData![0][0],
          data: this.getValuesFromData(this.timelineData!),
          borderColor: 'rgba(218, 165, 32, 1)',
          backgroundColor: 'rgba(218, 165, 32, 0.2)',
          pointStyle: 'circle',
          pointRadius: 6,
          pointHoverRadius: 10,
          pointBackgroundColor: 'rgba(218, 165, 32, 1)',
          pointBorderColor: '#fff',
        }],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: this.playerName?.valueOf()
          },
          legend: {
            position: 'top'
          }
        },
        scales: {
          x: {
            min: 0,
            max: 99,
            beginAtZero: true
          },
          y: {
            min: 0,
            max: 99,
            beginAtZero: true
          }
        }
      }
    }
    const ctx = (document.getElementById('timelineChart') as HTMLCanvasElement).getContext('2d')
    if (ctx) {
      this.timelineChart = new Chart(ctx, config)
    }
  }

  ngOnInit(): void {
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler, Legend, Tooltip)
    this.createTimeline()
  }

  getValuesFromData(data: keyValue<string, number>[]): number[] {
    const values: number[] = []
    for (const i of data) {
      values.push(i[1])
    }
    return values
  }

}
