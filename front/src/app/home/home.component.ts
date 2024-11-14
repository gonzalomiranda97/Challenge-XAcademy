import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../types';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  user: User | null = null

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.user = this.loginService.getCurrentUser()

  }

}
