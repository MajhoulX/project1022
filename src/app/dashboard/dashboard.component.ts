import { Component, OnInit } from '@angular/core';
import { Stage, stages } from '../../models/stage';
import { UserService } from '../../services/UserService';
import { Exam } from '../../models/exam';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  stages: Stage[] = stages;
  sessions: Exam[] = [];

  constructor(private userService:UserService){

  }

  ngOnInit(): void {
    this.sessions = this.userService.getUser.examsRegistered.map(er => er.exam)
  }
}
