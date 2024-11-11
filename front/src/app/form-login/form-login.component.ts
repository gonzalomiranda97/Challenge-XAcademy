import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../types';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

  loginForm = new FormGroup(
    {
    email: new FormControl(''),
    password: new FormControl('')
    }
  )

  signUpForm = new FormGroup(
    {
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    }
  )

  private currentUser: User = {
    username: null,
    email: null,
    token: null
  }

  isLogged: boolean = false

  showSignUp: boolean = false

  constructor(private loginService: LoginService) {

  }

  getCurrentUser() {
    return this.currentUser
  }

  setCurrentUser(user: User) {
    this.currentUser = user
    this.setIsLogged(true)
  }

  private setIsLogged(bool: boolean) {
    this.isLogged = bool
  }

  showSignUpForm(bool: boolean) {
    this.showSignUp = bool
  }

  async login() {
    console.log('Ejecutando login');
    await this.loginService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
    .then( (data) => {
      console.log(data)
      this.loginService.setCurrentUser(data)
      this.setCurrentUser(data)

    })
    .catch( (error) => {
      console.log('Credenciales incorrectas.', error)
    })
  }

  async signUp() {
    console.log('Ejecutando signUp')
    await this.loginService.signUp(this.signUpForm.controls.username.value, this.signUpForm.controls.email.value, this.signUpForm.controls.password.value)
    .then( (data) => {
      console.log('Usuario creado: ', data)
    })
    .catch( (error) => {
      console.log('Error al crear el usuario.', error)
    })
  }




}
