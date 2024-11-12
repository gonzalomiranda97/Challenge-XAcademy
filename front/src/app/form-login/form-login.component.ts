import { Component, OnInit } from '@angular/core';
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
export class FormLoginComponent implements OnInit{

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

  private currentUser: User | null = null

  isLogged: boolean = false

  showSignUp: boolean = false

  userCreated: boolean = false

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
      this.setCurrentUser(this.loginService.getCurrentUser())
  }

  resetLoginForm() {
    this.loginForm.controls.email.setValue('')
    this.loginForm.controls.password.setValue('')
  }

  resetSignUpForm() {
    this.signUpForm.controls.username.setValue('')
    this.signUpForm.controls.email.setValue('')
    this.signUpForm.controls.password.setValue('')
  }

  getCurrentUser() {
    return this.currentUser
  }

  setCurrentUser(user: User | null) {
    this.currentUser = user
    if (this.currentUser) {
      this.setIsLogged(true)
    } else {
      this.setIsLogged(false)
    }
    this.resetLoginForm()
  }

  private setIsLogged(bool: boolean) {
    this.isLogged = bool
  }

  showSignUpForm(bool: boolean) {
    this.showSignUp = bool
  }

  setUserCreated() {
    this.userCreated = true
    this.resetSignUpForm()
    setTimeout( () => {
      this.userCreated = false
    }, 2000)
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
      this.setUserCreated()
    })
    .catch( (error) => {
      console.log('Error al crear el usuario.', error)
    })
  }

  logOut() {
    this.loginService.setCurrentUser(null)
    this.setCurrentUser(null)
    this.setIsLogged(false)
  }
}
