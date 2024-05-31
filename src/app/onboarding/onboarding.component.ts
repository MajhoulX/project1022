import { Component, inject } from '@angular/core';
import { countries } from '../../models/country';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, civilities, educationSystems, educationLevels, bacInstitutionTypes, studyLevels } from '../../models/user';
import { Router } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Onboarding } from './onboarding.model';

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
  form = new FormGroup({
    step1: new FormGroup({
      civility: new FormControl('', [Validators.required]),
      residentCity: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      educationSystem: new FormControl('', [Validators.required]),
      educationLevel: new FormControl('', [Validators.required]),
      countryOfResidence: new FormControl('', [Validators.required]),
    }),
    bacSerie: new FormControl('', [Validators.required]),
    bacOption: new FormControl('', [Validators.required]),
    institutionName: new FormControl('', [Validators.required]),
    institutionType: new FormControl('', [Validators.required]),
    cin: new FormControl(''),
    passportNumber: new FormControl(''),
    educationSystemCountry: new FormControl(''),
    massarCode: new FormControl(''),
    bacAcquisitionYear: new FormControl(''),
    regionalExamScore: new FormControl(''),
    nationalExamScore: new FormControl(''),
    finalSchoolYearScore: new FormControl(''),
    bacAverageGrade: new FormControl(''),
    bacLevel: new FormControl('')
  });

  listOfCountries: string[] = countries.map(c => c.name);
  listOfCities: string[] = [];
  listOfBacLevels: string[] = studyLevels;
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

    this.form.controls.step1.controls.nationality.valueChanges.subscribe({
      next: newValue => {
        let cinField = this.form.controls.cin;
        let passportField = this.form.controls.passportNumber;
        let massarField = this.form.controls.massarCode;

        cinField?.clearValidators();
        passportField?.clearValidators();
        massarField?.clearValidators();

        if (newValue == 'Morocco') {
          cinField?.setValidators([Validators.required]);
          massarField?.setValidators([Validators.required]);
        } else {
          passportField?.setValidators([Validators.required]);
        }

        massarField?.updateValueAndValidity();
        passportField?.updateValueAndValidity();
        cinField?.updateValueAndValidity();
      }
    })

    this.form.controls.step1.controls.countryOfResidence.valueChanges.subscribe({
      next: newValue => {
        let residence = countries.find(c => c.name == newValue);
        if (residence) {
          this.listOfCities = residence.cities;
        }
      }
    });

    this.form.controls.step1.controls.educationSystem.valueChanges.subscribe({
      next: newValue => {
        let system = educationSystems.find(ed => ed.name == newValue);
        if (system) {
          this.listOfSeries = system.series.map(s => s.name);
        }

        let massarCodeField = this.form.controls.massarCode;
        let finalYearField = this.form.controls.finalSchoolYearScore;
        let regionalField = this.form.controls.regionalExamScore;
        let nationalField = this.form.controls.nationalExamScore;
        let educationSystemCountryField = this.form.controls.educationSystemCountry;
        let educationLevelField = this.form.controls.step1.controls.educationLevel;

        massarCodeField?.clearValidators();
        finalYearField?.clearValidators();
        regionalField?.clearValidators();
        nationalField?.clearValidators();
        educationSystemCountryField?.clearValidators();


        if (newValue == 'Marocain') {
          massarCodeField?.setValidators([Validators.required]);

          if (educationLevelField?.value == "Bac obtenu") {
            finalYearField?.setValidators([Validators.required]);
            regionalField?.setValidators([Validators.required]);
            nationalField?.setValidators([Validators.required]);

          }
        } else if (newValue == "Etranger") {
          educationSystemCountryField?.setValidators([Validators.required]);
        }

        massarCodeField?.updateValueAndValidity();
        finalYearField?.updateValueAndValidity();
        regionalField?.updateValueAndValidity();
        nationalField?.updateValueAndValidity();
        educationSystemCountryField?.updateValueAndValidity();
      }
    });

    this.form.controls.bacSerie.valueChanges.subscribe({
      next: newValue => {
        let serie = educationSystems.find(ed => ed.name == this.form.controls.step1.controls.educationSystem.value)?.series.find(s => s.name == newValue);
        if (serie) {
          this.listOfOptions = serie.options;
        }
      }
    });

    this.form.controls.step1.controls.educationLevel.valueChanges.subscribe({
      next: newValue => {
        let bacYearField = this.form.controls.bacAcquisitionYear;
        let bacLevelField = this.form.controls.bacLevel;
        let averageGradeField = this.form.controls.bacAverageGrade;
        let educationSystemField = this.form.controls.step1.controls.educationSystem;
        let finalYearField = this.form.controls.finalSchoolYearScore;
        let regionalField = this.form.controls.regionalExamScore;
        let nationalField = this.form.controls.nationalExamScore;

        bacYearField?.clearValidators();
        bacLevelField?.clearValidators();
        averageGradeField?.clearValidators();

        if (newValue == "Bac obtenu") {
          bacYearField?.setValidators([Validators.required]);
          averageGradeField?.setValidators([Validators.required]);
          bacLevelField?.setValidators([Validators.required]);

          if (educationSystemField?.value == "Marocain") {
            finalYearField?.setValidators([Validators.required]);
            regionalField?.setValidators([Validators.required]);
            nationalField?.setValidators([Validators.required]);
          } else {
            finalYearField?.clearValidators();
            regionalField?.clearValidators();
            nationalField?.clearValidators();
          }
        }

        finalYearField?.updateValueAndValidity();
        regionalField?.updateValueAndValidity();
        nationalField?.updateValueAndValidity();
        averageGradeField?.updateValueAndValidity();
        bacYearField?.updateValueAndValidity();
        bacLevelField?.updateValueAndValidity();
      }
    });
  }

  onNext() {
    let onboarding = new Onboarding();
    onboarding.civility = this.form.controls.step1.controls.civility.value!;
    onboarding.cin = this.form.controls.cin.value!;
    onboarding.passportNumber = this.form.controls.passportNumber.value!;
    onboarding.nationality = this.form.controls.step1.controls.nationality.value!;
    onboarding.address = this.form.controls.step1.controls.address.value!;
    onboarding.cityOfResidence = this.form.controls.step1.controls.residentCity.value!;
    onboarding.countryOfResidence = this.form.controls.step1.controls.countryOfResidence.value!;
    onboarding.massarCode = this.form.controls.massarCode.value!;
    onboarding.educationLevel = this.form.controls.step1.controls.educationLevel.value!;
    onboarding.educationSystem = this.form.controls.step1.controls.educationSystem.value!;
    onboarding.educationSystemCountry = this.form.controls.educationSystemCountry.value!;
    onboarding.bacSerie = this.form.controls.bacSerie.value!;
    onboarding.bacOption = this.form.controls.bacOption.value!;;
    onboarding.bacLevel = this.form.controls.bacLevel.value!;;
    onboarding.institutionType = this.form.controls.institutionType.value!;
    onboarding.institutionName = this.form.controls.institutionName.value!;
    onboarding.bacAcquisitionYear = this.parseNumber(this.form.controls.bacAcquisitionYear.value!);
    onboarding.bacAverageScore = this.parseNumber(this.form.controls.bacAverageGrade.value!);
    onboarding.finalSchoolYearScore = this.parseNumber(this.form.controls.finalSchoolYearScore.value!);
    onboarding.regionalExamScore = this.parseNumber(this.form.controls.regionalExamScore.value!);
    onboarding.nationalExamScore = this.parseNumber(this.form.controls.nationalExamScore.value!);
    onboarding.birthDate = new Date(this.form.controls.step1.controls.birthDate.value!);

    console.log(onboarding);
    this.userService.onboard(onboarding).subscribe({
      next: user => {
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  parseNumber(num: string | null): number | null {
    if (!num) {
      return null;
    }

    let res = Number.parseFloat(num);
    return isNaN(res) ? null : res;
  }
}
