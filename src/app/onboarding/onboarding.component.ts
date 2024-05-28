import { Component, inject } from '@angular/core';
import { countries } from '../../models/country';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, civilities, educationSystems, educationLevels, bacInstitutionTypes } from '../../models/user';
import { Router } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatStepperModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss'
})
export class OnboardingComponent {
  private _user: User | null = null;
  canSubmit: boolean = false;
  form = new FormGroup({
    step1: new FormGroup({
      civility: new FormControl('', [Validators.required]),
      residentCity: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      educationSystem: new FormControl('', [Validators.required]),
      educationLevel: new FormControl('', [Validators.required]),
      residentCountry: new FormControl('', [Validators.required]),
    }),
    cin: new FormControl(''),
    passportNumber: new FormControl(''),
    educationSystemCountry: new FormControl(''),
    massarCode: new FormControl(''),
    serie: new FormControl('', [Validators.required]),
    bacYear: new FormControl(''),
    regionalExamNote: new FormControl(''),
    nationalExamNote: new FormControl(''),
    finalYearGrade: new FormControl(''),
    bacAverageGrade: new FormControl(''),
    studyLevel: new FormControl('', [Validators.required]),
    studySystem: new FormControl('', [Validators.required]),
    institutionName: new FormControl('', [Validators.required]),
    institutionType: new FormControl('', [Validators.required]),
    option: new FormControl('', [Validators.required]),
  })

  listOfCountries: string[] = countries.map(c => c.name);
  listOfCities: string[] = [];
  listOfCivilities: string[] = civilities;
  listOfEducationSystems: string[] = educationSystems.map(ed => ed.name);
  listOfEducationLevels: string[] = educationLevels;
  listOfBacYears: number[] = [];
  listOfSeries: string[] = [];
  listOfOptions: string[] = [];
  listOfInstitutionTypes: string[] = bacInstitutionTypes;

  userService = inject(UserService);
  router = inject(Router);

  constructor() {
    for (let i = new Date().getFullYear(); i >= 2000; i--) {
      this.listOfBacYears.push(i);
    }

    this.form.get('step1')?.get('nationality')?.valueChanges.subscribe({
      next: newValue => {
        let cinField = this.form.get('cin');
        let passportField = this.form.get('passportNumber');

        cinField?.clearValidators();
        passportField?.clearValidators();

        if (newValue == 'Morocco') {
          cinField?.setValidators([Validators.required]);

        } else {
          passportField?.setValidators([Validators.required]);
        }

        passportField?.updateValueAndValidity();
        cinField?.updateValueAndValidity();
      }
    })

    this.form.get('step1')?.get('residentCountry')?.valueChanges.subscribe({
      next: newValue => {
        let residence = countries.find(c => c.name == newValue);
        if (residence) {
          this.listOfCities = residence.cities;
        }

        this.form.get('massarCode')?.updateValueAndValidity();
      }
    });

    this.form.get('step1')?.get('educationSystem')?.valueChanges.subscribe({
      next: newValue => {
        let system = educationSystems.find(ed => ed.name == newValue);
        if (system) {
          this.listOfSeries = system.series.map(s => s.name);
        }

        if (newValue == 'Marocain') {
          this.form.get('massarCode')?.setValidators([Validators.required]);
        } else {
          this.form.get('massarCode')?.clearValidators();
        }

        this.form.get('massarCode')?.updateValueAndValidity();
      }
    });

    this.form.get('serie')?.valueChanges.subscribe({
      next: newValue => {
        let serie = educationSystems.find(ed => ed.name == this.form.get('step1')?.get('educationSystem')?.value)?.series.find(s => s.name == newValue);
        if (serie) {
          this.listOfOptions = serie.options;
        }
      }
    });

    this.form.get('step1')?.get('educationLevel')?.valueChanges.subscribe({
      next: newValue => {
        let bacYearField = this.form.get('bacYear');
        let averageGradeField = this.form.get('bacAverageGrade');
        
        bacYearField?.clearValidators();
        averageGradeField?.clearValidators();
        
        if (newValue == "Bac obtenu") {
          bacYearField?.addValidators([Validators.required]);
        }
        else{
          averageGradeField?.addValidators([Validators.required]);
        }

        averageGradeField?.updateValueAndValidity();
        bacYearField?.updateValueAndValidity();
      }
    });
  }

  updateUser(): void {
    //   const user = new User();
    //   user.address = this.address.value!;
    //   user.nationality = this.nationality.value!;
    //   user.educationSystem = this.educationSystem.value!;
    //   user.educationLevel = this.educationLevel.value!;
    //   user.civility = this.civility.value!;
    //   user.birthDate = fromHtmlDate(this.birthDate.value!)!;
    //   user.residentCountry = this.residentCountry.value!;
    //   user.residentState = this.city.value!;

    //   if (this.nationality.value == "Morocco") {
    //     user.cin = this.cin.value!;
    //   } else {
    //     user.passportNumber = this.passportNumber.value!;
    //   }

    //   if (this.educationSystem.value == "Etranger") {
    //     user.educationSystemCountry = this.educationSystemCountry.value!;
    //   }

    //   this.userService.updateLocalUser(user);
  }

  onNext() {

  }
}
