import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import {Chart, ChartConfiguration, Filler, Legend, LineElement, PointElement, RadarController, RadialLinearScale, Title, Tooltip } from 'chart.js'
import { PlayerCS, Stats } from '../../types';
import { PlayerDetailsService } from '../../services/playerDetails.service';

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.css'
})
export class RadarChartComponent implements OnInit, AfterViewInit {

  radarChart: Chart | undefined

  labels = [ 'Ritmo', 'Físico', 'Pase', 'Tiro', 'Defensa', 'Dribbiling',
    'Curva', 'Salto', 'Resistencia', 'Fuerza', 'Habilidad Dribbiling', 
    'Visión', 'Agilidad', 'Balance', 'Tiro de larga distancia', 
    'Potencia del disparo', 'Voleas', 'Velocidad del portero', 
    'Precisión de tiros libres', 'Centros', 'Paradas del portero', 
    'Reacciones', 'Control del balón', 'Pase largo', 'Definición', 
    'Saques del portero', 'Calma', 'Penales', 'Manejo del portero', 
    'Reflejos del portero', 'Agresividad', 'Posicionamiento', 
    'Aceleración', 'Velocidad Sprint', 'Pase corto', 'Posicionamiento del portero', 
    'Intercepciones', 'Barrida', 'Entrada de pie', 'Precisión de cabeceo', 'Marcaje'
  ]

  player: PlayerCS | null = null

  constructor(private playerDetailsService: PlayerDetailsService) {
    Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title, RadarController)

  }

  ngOnInit(): void {
    this.playerDetailsService.selectedPlayer$.subscribe( (player) => {
      this.player = player
    })
  }

  ngAfterViewInit(): void {
    this.createRadar()
  }

  createRadar() {
    const config: ChartConfiguration = {
      type: 'radar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'burro!',
          data: this.extractStats(this.player?.player_stats!),
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      },
      options: {
        elements: {
          line: {
            borderWidth: 2
          }
        }
      }
    }
    const ctx = (document.getElementById('radarChart') as HTMLCanvasElement).getContext('2d')
    if (ctx) {
      this.radarChart = new Chart(ctx, config)
    }
  }

  extractStats(stats: Stats): number[] {
    if (!stats) {
      return []
    }
    return Object.values(stats)
  }



}
