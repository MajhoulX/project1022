import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SignupCredential } from './signup.model';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge, take } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(3)]);
  nom = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]);
  prenom = new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]);

  authService = inject(UserService);
  router = inject(Router);
  http = inject(HttpClient);

  emailErrorMessage: string = '';
  passwordErrorMessage: string = '';
  prenomErrorMessage: string = '';
  nomErrorMessage: string = '';
  canSignup = false;

  checkCanSignup() {
    this.canSignup = !(this.email.invalid || this.password.invalid || this.nom.invalid || this.prenom.invalid);
  }

  constructor() {
    this.authService.user.pipe(take(1)).subscribe(
      {
        next: user =>{
          if(user){
            this.router.navigate(['/step1']);
          }
        }
      }
    );

    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateEmailErrorMessage());

    merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updatePasswordErrorMessage());

    merge(this.prenom.statusChanges, this.prenom.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updatePrenomErrorMessage());

    merge(this.nom.statusChanges, this.nom.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateNomErrorMessage());
  }

  updateEmailErrorMessage() {
    if (this.email.hasError('required')) {
      this.emailErrorMessage = 'Veuillez saisir une valeur';
    } else if (this.email.hasError('email')) {
      this.emailErrorMessage = 'Email non valide';
    } else {
      this.emailErrorMessage = '';
    }

    this.checkCanSignup();
  }

  updatePasswordErrorMessage() {
    if (this.password.hasError('required')) {
      this.passwordErrorMessage = 'Veuillez saisir une valeur';
    } else if (this.password.hasError('min')) {
      this.passwordErrorMessage = 'Mot de passe trop court';
    } else {
      this.passwordErrorMessage = '';
    }

    this.checkCanSignup();
  }

  updatePrenomErrorMessage() {
    if (this.prenom.hasError('required')) {
      this.prenomErrorMessage = 'Veuillez saisir une valeur';
    } else if (this.prenom.hasError('min')) {
      this.prenomErrorMessage = 'Prenom trop court';
    } else if (this.prenom.hasError('requiredPattern')) {
      this.prenomErrorMessage = "Prenom ne doit contenir que des lettres";
    }
    else {
      this.prenomErrorMessage = '';
    }

    this.checkCanSignup();
  }

  updateNomErrorMessage() {
    if (this.nom.hasError('required')) {
      this.nomErrorMessage = 'You must enter a nom';
    } else if (this.nom.hasError('min')) {
      this.nomErrorMessage = 'Nom trop court';
    } else if (this.prenom.hasError('requiredPattern')) {
      this.nomErrorMessage = "Nom ne doit contenir que des lettres";
    }
    else {
      this.nomErrorMessage = '';
    }

    this.checkCanSignup();
  }

  onSignup() {
    const cred = new SignupCredential();
    cred.email = this.email.value!;
    cred.password = this.password.value!;
    cred.firstName = this.prenom.value!;
    cred.lastName = this.nom.value!;

    this.authService.signup(cred).subscribe({
      next: (user) => {
        console.log(user);
        this.router.navigate(['/step1']);
      }
    });
  }
}
