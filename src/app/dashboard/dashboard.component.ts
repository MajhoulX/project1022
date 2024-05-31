import { Component, OnInit, inject } from '@angular/core';
import { Stage, stages } from '../../models/stage';
import { Exam } from '../../models/exam';
import { User } from '../../models/user';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Session } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    MatTableModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  userService = inject(UserService);
  http = inject(HttpClient);
  stages: Stage[] = stages;
  user: User | null = null;
  showEmailConfirm = true;

  sessions: Session[] = [];

  columns: string[] = [
    'name', 'program', 'state'
  ];

  ngOnInit(): void {
    this.userService.user
      .subscribe(user => {
        if (user) {
          this.user = user;
        }
      });

    this.http.get<Session[]>("https://localhost:7109/api/user/exam").subscribe({
      next: (sessions) => {
        this.sessions = sessions;
      }
    })
  }

  sendEmailToken(){
    this.http.get<Session[]>("https://localhost:7109/api/auth/confirmation/request").subscribe({
      next: (sessions) => {
        this.showEmailConfirm = false;
      }
    })
  }
}
