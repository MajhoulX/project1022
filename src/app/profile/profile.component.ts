import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { userService } from '../../services/userService';
import {MatCardModule} from '@angular/material/card';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,MatCardModule,PaymentBalanceComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  email: string = "";
  firstName: string = "";
  lastName: string = "";
  phone: string = "";

  constructor(private userService: userService) {
  }

  ngOnInit(): void {
    this.email = this.userService.getUser.email;
    this.firstName = this.userService.getUser.firstName;
    this.lastName = this.userService.getUser.lastName;
    this.phone = this.userService.getUser.phone;
  }

  updateUser(): void {
    const user = this.userService.getUser;
    user.email = this.email;
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.phone = this.phone;

    this.userService.updateUser(user);
  }
}
