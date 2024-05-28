import { Component, OnInit, inject } from '@angular/core';
import { Stage, stages } from '../../models/stage';
import { Exam } from '../../models/exam';
import { User } from '../../models/user';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  stages: Stage[] = stages;
  user: User | null = null;
  sessions: Exam[] = [];
  userService = inject(UserService);

  ngOnInit(): void {
    this.userService.user
      .subscribe(user => {
        if(user){
          this.user = user;
          this.sessions = user.examsRegistered.map(ex => ex.exam);
        }
      })
  }
}
