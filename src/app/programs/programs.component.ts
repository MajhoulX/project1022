import { Component } from '@angular/core';
import { Faculty, faculties } from '../../models/faculty';
import { ExamType } from '../../models/exam';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  faculties: Faculty[];
  constructor(){
    this.faculties = faculties; 
  }
}
