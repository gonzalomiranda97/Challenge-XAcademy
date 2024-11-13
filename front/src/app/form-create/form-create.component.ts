import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModelService } from '../../services/models.service';
import { clubExistsValidator } from '../../validators';

@Component({
  selector: 'app-form-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css'
})
export class FormCreateComponent {

  createForm: FormGroup;

  constructor(private fb: FormBuilder, private modelService: ModelService) {
    this.createForm = this.fb.group({
      clubId: ['', Validators.required, clubExistsValidator(this.modelService)]
    })
  }


  onSubmit() {
    if (this.createForm.valid) {
      console.log('Formulario valido.')
    } else {
      console.log('Formulario invalido.')
    }
  }

  
}
