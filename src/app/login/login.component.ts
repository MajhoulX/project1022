import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { FormControl, FormControlStatus, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LoginCredential } from '../../models/loginCredential';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(3)]);

  emailErrorMessage: string = '';
  passwordErrorMessage: string = '';
  canLogin = false;

  checkCanLogin() {
    this.canLogin = !this.email.invalid && !this.password.invalid;
  }

  constructor(private http: HttpClient) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateEmailErrorMessage());

    merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updatePasswordErrorMessage());
  }

  updateEmailErrorMessage() {
    if (this.email.hasError('required')) {
      this.emailErrorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.emailErrorMessage = 'Not a valid email';
    } else {
      this.emailErrorMessage = '';
    }

    this.checkCanLogin();
  }

  updatePasswordErrorMessage() {
    if (this.password.hasError('required')) {
      this.passwordErrorMessage = 'You must enter a value';
    } else if (this.password.hasError('min')) {
      this.passwordErrorMessage = 'Password too short';
    } else {
      this.passwordErrorMessage = '';
    }

    this.checkCanLogin();
  }

  onLogin() {
    const cred = new LoginCredential();
    cred.email = this.email.value!;
    cred.password = this.password.value!;
    
    this.http.post<any>("http://localhost:5213/api/auth", {
      email: this.email.value!,
      password: this.password.value!
    }).subscribe(
      {
        error(err) {
          console.error("err");
        },
        complete() {
          const enc = btoa(`${cred.email}:${cred.password}`);
          localStorage.setItem("user_cred", enc);
          console.log("broski");
        }
      }
    )

    console.log("bruh");
  }
} 
