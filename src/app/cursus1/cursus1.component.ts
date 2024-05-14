import { Renderer2, AfterViewInit, Component, ElementRef, ViewChild, RendererStyleFlags2 } from '@angular/core';
import { Country, countries } from '../../models/country';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/UserService';
import { User, civilities, educationSystems, educationLevels } from '../../models/user';
import { Router } from '@angular/router';
import { defaultIfEmpty, fromHtmlDate, toHtmlDate } from '../../utilities/utility';

@Component({
  selector: 'app-cursus1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cursus1.component.html',
  styleUrl: './cursus1.component.scss'
})
export class Cursus1Component {
  countries: string[];
  educationSystemCountries: string[];
  cities: string[];
  civilityValues: string[];
  educationSystems: string[];
  educationLevels: string[];

  cin: string;
  city: string;
  civility: string;
  birthDate: string;
  address: string;
  edLevel: string;
  nationality: string;
  educationSystem: string;
  educationLevel: string;
  passportNumber: string;
  residentCountry: string;
  educationSystemCountry: string;

  cinValid: boolean = true;
  cityValid: boolean = true;
  civilityValid: boolean = true;
  birthDateValid: boolean = true;
  nationalityValid: boolean = true;
  educationSystemValid: boolean = true;
  educationSystemCountryValid: boolean = true;
  educationLevelValid: boolean = true;
  passportNumberValid: boolean = true;
  residentCountryValid: boolean = true;
  residentCityValid: boolean = true;

  constructor(private userService:UserService, private router: Router) {
    let user = userService.getUser;
    this.cin = user.cin;
    this.civility = user.civility;
    this.address = user.address;
    this.edLevel = user.educationLevel;
    this.nationality = defaultIfEmpty(user.nationality, "Nationalité");
    this.educationSystem = defaultIfEmpty(user.educationSystem, "Système d'étude");
    this.passportNumber = user.passportNumber;
    if (user.birthDate) {
      this.birthDate = toHtmlDate(user.birthDate);
    } else {
      this.birthDate = "";
    }
    this.residentCountry = user.residentCountry;

    this.cities = [];
    this.civilityValues = civilities;
    this.onResidenceCountryChanged();
    this.countries = ["Nationalité"].concat(countries.map(c => c.name));
    this.educationSystemCountries = ["Pays du système d'étude"].concat(countries.map(c => c.name));
    this.educationSystems = ["Système d'étude"].concat(educationSystems.map(ed => ed.name));
    this.city = defaultIfEmpty(user.residentState, "Ville de résidence");
    this.educationSystemCountry = defaultIfEmpty(user.educationSystemCountry, "Pays du système d'étude");
    this.educationLevels = educationLevels;
    this.educationLevel = "";
  }

  onResidenceCountryChanged() {
    let found = countries.find(c => c.name == this.residentCountry);
    this.cities = ["Ville de résidence"];
    if (found) {
      this.cities = this.cities.concat(found.cities);
    }

    if (!this.cities.find(c => c == this.city)) {
      this.city = this.cities[0];
    }
  }

  onNext() {
    this.nationalityValid = countries.find(x => x.name == this.nationality) ? true : false;
    this.cinValid = this.cin.length == 7;
    this.passportNumberValid = this.passportNumber.length > 6 && this.passportNumber.length < 9;
    this.cityValid = countries.flatMap(c => c.cities).find(x => x == this.city) ? true : false;
    this.residentCountryValid = countries.find(x => x.name == this.residentCountry) ? true : false;
    this.birthDateValid = fromHtmlDate(this.birthDate) ? true : false;
    this.civilityValid = civilities.find(x => x == this.civility) ? true : false;
    this.educationSystemValid = educationSystems.find(x => x.name == this.educationSystem) ? true : false;
    this.educationSystemCountryValid = countries.find(x => x.name == this.educationSystemCountry) ? true : false;
    this.educationLevelValid = educationLevels.find(x => x == this.educationLevel) ? true : false;

    if (this.civilityValid
      && this.nationalityValid
      && this.residentCountryValid
      && this.residentCityValid
      && this.birthDateValid
      && this.educationSystemValid
      && this.educationLevelValid
    ) {

      if ((this.nationality == "Morocco" && !this.cinValid)
        || (this.nationality != "Morocco" && !this.passportNumberValid)
        || (this.educationSystem == "Etranger" && !this.educationSystemCountryValid)) {
        return;
      }

      //SUCCESS
      let u = this.userService.getUser;
      u.address = this.address;
      u.nationality = this.nationality;
      u.educationSystem = this.educationSystem;
      u.educationLevel = this.educationLevel;
      u.civility = this.civility;
      u.birthDate = fromHtmlDate(this.birthDate)!;
      u.residentCountry = this.residentCountry;
      u.residentState = this.city;

      if (this.nationality == "Morocco") {
        u.cin = this.cin;
      } else {
        u.passportNumber = this.passportNumber;
      }

      if(this.educationSystem == "Etranger"){
        u.educationSystemCountry = this.educationSystemCountry;
      }

      this.userService.updateUser(u);
      console.log(u);
      this.router.navigateByUrl("/step2");
    }
  }
}
