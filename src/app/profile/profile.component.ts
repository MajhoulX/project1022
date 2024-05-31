import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";
import { civilities } from '../../models/user';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { Profile } from './profile.model';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatStepperModule,
    PaymentBalanceComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  userService = inject(UserService);

  form = new FormGroup({
    civility: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phone: new FormControl(''),
    email: new FormControl('', [Validators.required])
  });

  listOfCivilities = civilities;

  ngOnInit(): void {
    this.populateData();
  }

  populateData(): void {
    this.userService.user
      .subscribe(user => {
        this.form.controls.email.setValue(user!.email);
        this.form.controls.firstName.setValue(user!.firstName);
        this.form.controls.lastName.setValue(user!.lastName);
        this.form.controls.phone.setValue(user!.phoneNumber);
        this.form.controls.civility.setValue(user!.civility);
      });
  }

  updateUser(): void {
    if (this.form.valid) {
      let profile = new Profile();
      profile.civility = this.form.controls.civility.value!;
      profile.firstName = this.form.controls.firstName.value!;
      profile.lastName = this.form.controls.lastName.value!;
      profile.phoneNumber = this.form.controls.phone.value!;
      profile.email = this.form.controls.email.value!;

      this.userService.updateProfile(profile)
        .subscribe(() => {
          console.log("sent for update")
        });
    }
  }
}
