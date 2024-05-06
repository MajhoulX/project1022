import { Component, OnInit } from '@angular/core';
import { Payment } from '../../models/payment';
import { UserService } from '../../services/UserService';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{
  payments:Payment[] = [];
  constructor(private userService:UserService){

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
