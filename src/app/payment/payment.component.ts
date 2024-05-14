import { Component, OnInit } from '@angular/core';
import { Payment } from '../../models/payment';
import { userService } from '../../services/userService';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{
  payments:Payment[] = [];
  constructor(private userService:userService){

  }
  getTotal(): number{
    let sum = 0;
    this.payments.forEach(p => {
      sum += p.amount;
    })
    return sum;
  }
  ngOnInit(): void {
    this.payments = this.userService.getUser.payments;
  }
}
