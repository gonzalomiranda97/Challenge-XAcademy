import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModelService } from '../../services/models.service';
import { clubExistsValidator, fifaVersionExistsValidator, nonEmptyStringValidator, playerNotExistsValidator} from '../../validators';
import { reqPlayer } from '../../types';
import { formatCreateFormValues } from '../../formatFunctions';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css'
})
export class FormCreateComponent {

  createForm: FormGroup;

    @Output() opt = new EventEmitter()

  constructor(private fb: FormBuilder, private modelService: ModelService) {
    this.createForm = this.fb.group({
      // playerModel
      player_id: ['', [Validators.required, nonEmptyStringValidator], [playerNotExistsValidator(this.modelService)]],
      short_name: ['', [Validators.required, nonEmptyStringValidator]],
      long_name: ['', [Validators.required, nonEmptyStringValidator]],
      nationality_id: ['', [Validators.required, nonEmptyStringValidator]],
      nationality_name: ['', [Validators.required, nonEmptyStringValidator]],
      birth_date: ['', [Validators.required, nonEmptyStringValidator]],
      preferred_foot: ['', [Validators.required, nonEmptyStringValidator]],

      //PlayerClubSeasonModel
      FifaVersionId: ['', [Validators.required, nonEmptyStringValidator], fifaVersionExistsValidator(this.modelService)],
      ClubId: ['', [Validators.required, nonEmptyStringValidator], clubExistsValidator(this.modelService)],
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

  getFormattedFormValues() {
    const formValues = {...this.createForm.value}
    console.log(formValues)
    const formatedValues: reqPlayer = formatCreateFormValues(formValues)
    return formatedValues
  }

  onSubmit() {
    if (this.createForm.valid) {
      console.log('Formulario válido')
      const p: reqPlayer = this.getFormattedFormValues()
      this.modelService.createPlayer(p)
      .then( (data) => {
        console.log('Jugador creado.')
        this.opt.emit(0)

      })

    } else {
      console.log('Formulario inválido.')
    }
  }
}
