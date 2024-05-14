import { Component, OnInit } from '@angular/core';
import { Stage, stages } from '../../models/stage';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { userService } from '../../services/userService';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent implements OnInit {
  stages:Stage[] = stages;
  user:User; 

  constructor(private userService:userService){
    this.user = this.userService.getUser;
  }
  
  ngOnInit(): void {
  }
}