import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, MatCardModule, PaymentBalanceComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  private _user: User | null = null;
  userService = inject(UserService);

  email: string = "";
  firstName: string = "";
  lastName: string = "";
  phone: string = "";

  ngOnInit(): void {
    this.populateData();
  }

  populateData(): void {
    this.userService.user
      .subscribe(user => {
        this.email = user!.email;
        this.firstName = user!.firstName;
        this.lastName = user!.lastName;
        this.phone = user!.phone;
        this._user = user;
      });
  }

  updateUser(): void {
    if (this._user) {
      this._user.email = this.email;
      this._user.firstName = this.firstName;
      this._user.lastName = this.lastName;
      this._user.phone = this.phone;

      this.userService.updateUserInAPI(this._user)
        .subscribe(() => {
          console.log("sent for update")
        });
    }
  }
}
