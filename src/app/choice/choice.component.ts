import { Component, inject } from '@angular/core';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { Session } from '../dashboard/dashboard.model';

@Component({
    selector: 'app-choice',
    standalone: true,
    templateUrl: './choice.component.html',
    styleUrl: './choice.component.scss',
    imports: [PaymentBalanceComponent, MatTableModule]
})
export class ChoiceComponent {
    userService = inject(UserService);
    http = inject(HttpClient);
  
    sessions: Session[] = [];
  
    columns: string[] = [
      'name', 'program', 'annales', 'etat', 'résultats', 'action'
    ];
  
    ngOnInit(): void {
      this.http.get<Session[]>("https://localhost:7109/api/user/exam").subscribe({
        next: (sessions) => {
          this.sessions = sessions;
        }
      })
    }
}
