import { Component } from '@angular/core';
import { Stage, stages } from '../../models/stage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent {
  stages:Stage[] = stages;
}