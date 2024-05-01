import { Component } from '@angular/core';
import { Stage, stages } from '../../models/stage';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  stages: Stage[] = stages;
}
