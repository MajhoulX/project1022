import { Component } from '@angular/core';
import { Faculty, faculties } from '../../models/faculty';
import { ExamType } from '../../models/exam';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";

@Component({
    selector: 'app-programs',
    standalone: true,
    templateUrl: './programs.component.html',
    styleUrl: './programs.component.scss',
    imports: [PaymentBalanceComponent]
})
export class ProgramsComponent {
  faculties: Faculty[];
  constructor(){
    this.faculties = faculties; 
  }
}
