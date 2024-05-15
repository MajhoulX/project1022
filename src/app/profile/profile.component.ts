import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/UserService';
import { MatCardModule } from '@angular/material/card';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";
import { error } from 'console';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, MatCardModule, PaymentBalanceComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  private _user: User | null = null;

  email: string = "";
  firstName: string = "";
  lastName: string = "";
  phone: string = "";

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.populateData();
  }

  populateData(): void {
    this.userService.getUser()
      .subscribe(user => {
        this.email = user.email;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.phone = user.phone;
        this._user = user;
      });
  }

  updateUser(): void {
    if (this._user) {
      this._user.email = this.email;
      this._user.firstName = this.firstName;
      this._user.lastName = this.lastName;
      this._user.phone = this.phone;

      this.userService.setUser(this._user)
        .subscribe(() => {
          console.log("sent for update")
        });
    }
  }
}
