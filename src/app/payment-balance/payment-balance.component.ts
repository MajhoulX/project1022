import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-payment-balance',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './payment-balance.component.html',
  styleUrl: './payment-balance.component.scss'
})
export class PaymentBalanceComponent implements OnInit {
  amount: number = 0;
  userService = inject(UserService);

  ngOnInit(): void {
    let sum: number = 0;
    this.userService.user
      .subscribe(user => {
        if(user){
          user.payments.forEach(p => {
            sum += p.amount;
          });
          this.amount = sum;
        }
      })
  }
}
