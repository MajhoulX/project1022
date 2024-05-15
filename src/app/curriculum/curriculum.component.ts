import { Component, OnInit } from '@angular/core';
import { Stage, stages } from '../../models/stage';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/UserService';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent implements OnInit {
  stages: Stage[] = stages;
  user: User | null = null;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(user => {
        this.user = user;
      })
  }
}