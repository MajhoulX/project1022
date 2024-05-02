import { Component } from '@angular/core';
import { Country, countries } from '../../models/country';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursus1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cursus1.component.html',
  styleUrl: './cursus1.component.scss'
})
export class Cursus1Component {
  countries:Country[] = countries;
  selectedResidenceCountry: string = "Pays de résidence";
  cities:string[] = [];

  onResidenceCountryChanged(){
    let found = countries.find(c => c.name == this.selectedResidenceCountry);
    if(found){
      this.cities = found.cities;
    }else{
      this.cities = [];
    }
  }
}
