import { Component, OnInit } from '@angular/core';
import { Stage, stages } from '../../models/stage';
import { UserService } from '../../services/UserService';
import { Exam } from '../../models/exam';
import { User } from '../../models/user';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  stages: Stage[] = stages;
  user: User | undefined;
  sessions: Exam[] = [];

  constructor(private userService:UserService){

  }

  ngOnInit(): void {
    this.user = this.userService.getUser;
    this.sessions = this.user.examsRegistered.map(ex => ex.exam);
  }
}
