import { Component } from '@angular/core';
import { Country, countries } from '../../models/country';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/UserService';
import { User, civilities, studySystems } from '../../models/user';
import { toHtmlDate } from '../../utilities/dates';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursus1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cursus1.component.html',
  styleUrl: './cursus1.component.scss'
})
export class Cursus1Component {
  user: User;
  countries: string[];
  cities: string[];
  civilityValues: string[];
  studySystems: string[];

  cin: string;
  city: string;
  civility: string;
  birthDate: string;
  address: string;
  studyLevel: string;
  nationality: string;
  studySystem: string;
  passportNumber: string;
  residentCountry: string;

  constructor(private userService: UserService, private router: Router) {
    this.user = userService.getUser;
    this.cin = this.user.cin;
    this.civility = this.user.civility;
    this.address = this.user.address;
    this.studyLevel = this.user.bacLevel;
    this.nationality = this.user.nationality;
    this.studySystem = this.user.bacStudySystem;
    this.passportNumber = this.user.passportNumber;
    this.birthDate = toHtmlDate(this.user.birthDate);
    this.residentCountry = this.user.residentCountry;

    this.cities = ["Ville de résidence"];
    this.civilityValues = civilities;
    this.onResidenceCountryChanged();
    this.countries = ["Nationalité"].concat(countries.map(c => c.name));
    this.studySystems = ["Système d'étude"].concat(studySystems);
    this.city = this.user.residentState;
  }

  onResidenceCountryChanged() {
    let found = countries.find(c => c.name == this.residentCountry);
    if (found) {
      this.cities = ["Ville de résidence"].concat(found.cities);
    } else {
      this.cities = ["Ville de résidence"];
    }

    if (!this.cities.find(c => c == this.city)) {
      this.city = this.cities[0];
    }
  }

  onNext(){
    this.router.navigateByUrl("/step2");
  }
}
