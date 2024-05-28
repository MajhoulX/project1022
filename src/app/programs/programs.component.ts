import { Component, Inject, OnInit } from '@angular/core';
import { Faculty, faculties } from '../../models/faculty';
import { Exam, ExamType } from '../../models/exam';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";
import { UserService } from '../../services/user.service';
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
export class ProgramsComponent implements OnInit {
  faculties: Faculty[];
  constructor(private userService:UserService){
    this.faculties = faculties; 
  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  addToRegisteredExams(examName: string){
    // const e = this.doc.getElementById(examName) as HTMLSelectElement;
    // const ex = faculties.flatMap(f => f.fieldOfStudies.flatMap(s => s.exams));
    // const cex = ex.find(exx => exx.id.toString() == e.value)!;
    // if(cex){
    //   const n = this.userService.getUser.examsRegistered.push(new UserExam(cex));
    //   console.log('added ' + this.userService.getUser.examsRegistered.length);
    // }else{
    //   console.log("invalid option");
    // }
  }
}
