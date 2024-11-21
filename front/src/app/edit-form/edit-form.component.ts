import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModelService } from '../../services/models.service';
import { clubExistsValidator, fifaVersionExistsValidator, nonEmptyStringValidator, playerExistsValidator} from '../../validators';
import { PlayerDetailsService } from '../../services/playerDetails.service';
import { PlayerCS, reqPlayer} from '../../types';
import { formatEditFormValues } from '../../formatFunctions';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent implements OnInit{

  editForm: FormGroup;

  player: PlayerCS | null = null

  @Output() opt = new EventEmitter()

  constructor(private fb: FormBuilder, private modelService: ModelService, private playerDetailsService: PlayerDetailsService) {
    this.editForm = this.fb.group({
      // playerModel
      short_name: ['', [Validators.required, nonEmptyStringValidator]],
      long_name: ['', [Validators.required, nonEmptyStringValidator]],
      nationality_id: ['', [Validators.required, nonEmptyStringValidator]],
      nationality_name: ['', [Validators.required, nonEmptyStringValidator]],
      birth_date: ['', [Validators.required, nonEmptyStringValidator]],
      preferred_foot: ['', [Validators.required, nonEmptyStringValidator]],

      //PlayerClubSeasonModel
      player_positions: ['', [Validators.required, nonEmptyStringValidator]],
      overall: ['', [Validators.required,  Validators.min(1), Validators.max(99)]],
      potential: ['', [Validators.required,  Validators.min(1), Validators.max(99)]],
      value: ['', [Validators.required, nonEmptyStringValidator]],
      wage: ['', [Validators.required, nonEmptyStringValidator]],
      age: ['', [Validators.required, nonEmptyStringValidator]],
      height: ['', [Validators.required, nonEmptyStringValidator]],
      weight: ['', [Validators.required, nonEmptyStringValidator]],
      club_position: [''],
      club_jersey_number: [''],
      club_loaned_from: [''],
      club_joined_date: [''],
      club_contract_until_year: [''],
      nation_position: [''],
      nation_jersey_number: [''],
      weak_foot: ['', [Validators.required,  Validators.min(1), Validators.max(5)]],
      skill_moves: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      international_reputation: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      work_rate: ['', [Validators.required, nonEmptyStringValidator]],
      body_type: ['', [Validators.required, nonEmptyStringValidator]],
      real_face: ['', [Validators.required, nonEmptyStringValidator]],
      release_clause: [''],
      player_tags: [''],
      player_traits: [''],
      player_face_url: [''],

      //Stats
      pace: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      physic: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      passing: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      shooting: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      defending: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      dribbling: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      skill_curve: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      power_jumping: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      power_stamina: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      power_strength: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      skill_dribbling: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      mentality_vision: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      movement_agility: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      movement_balance: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      power_long_shots: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      power_shot_power: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      attacking_volleys: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      goalkeeping_speed: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      skill_fk_accuracy: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      attacking_crossing: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      goalkeeping_diving: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      movement_reactions: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      skill_ball_control: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      skill_long_passing: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      attacking_finishing: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      goalkeeping_kicking: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      mentality_composure: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      mentality_penalties: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      goalkeeping_handling: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      goalkeeping_reflexes: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      mentality_aggression: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      mentality_positioning: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      movement_acceleration: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      movement_sprint_speed: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      attacking_short_passing: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      goalkeeping_positioning: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      mentality_interceptions: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      defending_sliding_tackle: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      defending_standing_tackle: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      attacking_heading_accuracy: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      defending_marking_awareness: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
    })
  }

  ngOnInit(): void {
    this.playerDetailsService.selectedPlayer$.subscribe( (data) => {
      this.player = data
    })
    console.log(Object.entries(this.player!))
    console.log(Object.entries(this.player?.player_stats!))
    // Object.entries devuelve un array con pares clave-valor
    Object.entries(this.player?.Player!).forEach( ([key, value]) => {
      this.editForm.get(key)?.setValue(value)
    })
    Object.entries(this.player!).forEach( ([key, value]) => {
      this.editForm.get(key)?.setValue(value)
    })
    Object.entries(this.player?.player_stats!).forEach( ([key, value]) => {
      this.editForm.get(key)?.setValue(value)
    })
  }

  getFormattedFormValues() {
    const formValues = {...this.editForm.value}
    const player_id = this.player?.Player.player_id
    const playercs_id = this.player?.id
    console.log(formValues)
    console.log(player_id)
    console.log(playercs_id)
    const formatedValues: reqPlayer = formatEditFormValues(player_id!, playercs_id!, formValues)
    return formatedValues
  }

  onSubmit() {
    if (this.editForm.valid) {
      console.log('Formulario valido.')
      const p: reqPlayer = this.getFormattedFormValues()
      console.log(p)
      this.modelService.editPlayer(p)
      .then( (data) => {
        console.log('Jugador editado.')
        this.opt.emit(0)
      })
    } else {
      console.log('Formulario invalido.')
    }
  }

  
}