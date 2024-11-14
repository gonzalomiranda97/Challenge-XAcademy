import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModelService } from '../../services/models.service';
import { clubExistsValidator, fifaVersionExistsValidator, nonEmptyStringValidator, playerExistsValidator} from '../../validators';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {

  editForm: FormGroup;

  constructor(private fb: FormBuilder, private modelService: ModelService) {
    this.editForm = this.fb.group({
      // playerModel
      player_id: ['', [Validators.required, nonEmptyStringValidator], playerExistsValidator(this.modelService)],
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
      overall: ['', [Validators.required, nonEmptyStringValidator]],
      potential: ['', [Validators.required, nonEmptyStringValidator]],
      value: ['', [Validators.required, nonEmptyStringValidator]],
      wage: ['', [Validators.required, nonEmptyStringValidator]],
      age: ['', [Validators.required, nonEmptyStringValidator]],
      height: ['', [Validators.required, nonEmptyStringValidator]],
      weight: ['', [Validators.required, nonEmptyStringValidator]],
      club_position: ['', [Validators.required, nonEmptyStringValidator]],
      club_jersey_number: ['', [Validators.required, nonEmptyStringValidator]],
      club_loaned_from: ['', [Validators.required, nonEmptyStringValidator]],
      club_joined_date: ['', [Validators.required, nonEmptyStringValidator]],
      club_contract_until_year: ['', [Validators.required, nonEmptyStringValidator]],
      nation_position: ['', [Validators.required, nonEmptyStringValidator]],
      nation_jersey_number: ['', [Validators.required, nonEmptyStringValidator]],
      weak_foot: ['', [Validators.required, nonEmptyStringValidator]],
      skill_moves: ['', [Validators.required, nonEmptyStringValidator]],
      international_reputation: ['', [Validators.required, nonEmptyStringValidator]],
      work_rate: ['', [Validators.required, nonEmptyStringValidator]],
      body_type: ['', [Validators.required, nonEmptyStringValidator]],
      real_face: ['', [Validators.required, nonEmptyStringValidator]],
      release_clause: ['', [Validators.required, nonEmptyStringValidator]],
      player_tags: ['', [Validators.required, nonEmptyStringValidator]],
      player_traits: ['', [Validators.required, nonEmptyStringValidator]],
      player_face_url: ['', [Validators.required, nonEmptyStringValidator]],

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
      mentality_aggresion: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
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

  onSubmit() {
    if (this.editForm.valid) {
      console.log('Formulario valido.')
    } else {
      console.log('Formulario invalido.')
    }
  }

  
}
