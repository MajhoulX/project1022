import { Component, OnInit, inject } from '@angular/core';
import { Stage, stages } from '../../models/stage';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

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
  userService = inject(UserService);

  ngOnInit(): void {
    this.userService.user
      .subscribe(u => {
        this.user = u;
      });
  }
}