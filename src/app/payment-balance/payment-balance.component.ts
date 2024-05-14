import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { userService } from '../../services/userService';

@Component({
  selector: 'app-payment-balance',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './payment-balance.component.html',
  styleUrl: './payment-balance.component.scss'
})
export class PaymentBalanceComponent implements OnInit{
  amount:number = 0;
  constructor(private userService: userService){
  }

  ngOnInit(): void {
    let sum: number = 0;
    this.userService.getUser.payments.forEach(p => {
      sum += p.amount;
    });
    this.amount = sum;
  }
}
