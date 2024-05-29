import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { LoginCredential } from './login.model';

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

  authService = inject(UserService);
  router = inject(Router);

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

    this.authService.login(cred).subscribe({
      next: (user) => {
        this.canLogin = false;
        this.router.navigate(['/step1']);
      },
      error: (err) => {
        this.canLogin = true;
      }
    });
  }
} 
