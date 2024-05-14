import { Component, Inject } from '@angular/core';
import { Faculty, faculties } from '../../models/faculty';
import { Exam, ExamType } from '../../models/exam';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";
import { userService } from '../../services/userService';
import { FormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { UserExam } from '../../models/userExam';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
    selector: 'app-programs',
    standalone: true,
    templateUrl: './programs.component.html',
    styleUrl: './programs.component.scss',
    imports: [PaymentBalanceComponent,MatExpansionModule]
})
export class ProgramsComponent {
  faculties: Faculty[];
  constructor(private userService:userService, @Inject(DOCUMENT) private doc:Document){
    this.faculties = faculties; 
  }

  addToRegisteredExams(examName: string){
    const e = this.doc.getElementById(examName) as HTMLSelectElement;
    const ex = faculties.flatMap(f => f.fieldOfStudies.flatMap(s => s.exams));
    const cex = ex.find(exx => exx.id.toString() == e.value)!;
    if(cex){
      const n = this.userService.getUser.examsRegistered.push(new UserExam(cex));
      console.log('added ' + this.userService.getUser.examsRegistered.length);
    }else{
      console.log("invalid option");
    }
  }
}
