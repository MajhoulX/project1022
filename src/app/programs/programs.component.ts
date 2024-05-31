import { Component, Inject, OnInit, inject } from '@angular/core';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";
import { UserService } from '../../services/user.service';
import { DOCUMENT } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { ExamRegisteration, Faculty } from './programs.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  standalone: true,
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss',
  imports: [PaymentBalanceComponent, MatExpansionModule]
})
export class ProgramsComponent implements OnInit {
  userService = inject(UserService);
  http = inject(HttpClient);
  router = inject(Router);
  doc = inject(DOCUMENT);

  faculties: Faculty[] = [];

  ngOnInit(): void {
    this.http.get<Faculty[]>("https://localhost:7109/api/exam/program").subscribe({
      next: (faculties) => {
        this.faculties = faculties;
      }
    })
  }

  addToRegisteredExams(examName: string) {
    const element = this.doc.getElementById(examName) as HTMLSelectElement;
    const cex = this.faculties.flatMap(f => f.fieldOfStudies.flatMap(s => s.exams)).find(exx => exx.id.toString() == element.value)!;
    console.log(cex);
    let registeration = new ExamRegisteration();
    registeration.examIds = [cex.id];
    this.http.post<any>("https://localhost:7109/api/user/exam/register", registeration).subscribe({
      next: result =>{
        console.log(result);
        this.router.navigate(['portal', 'choix']);
      }
    });
  }
}
