import { Component, OnInit } from '@angular/core';
import { EducationSystem, Serie, bacInstitutionTypes, educationLevels, educationSystems, studyLevels } from '../../models/user';
import { UserService } from '../../services/UserService';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-cursus2',
  standalone: true,
  imports: [FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './cursus2.component.html',
  styleUrl: './cursus2.component.scss'
})
export class Cursus2Component {
  bacObtained: boolean;
  massarCode: string = "";
  serie: string;
  bacYear: string = "Année d'obtention du Bac";
  regionalExamNote: string = "";
  nationalExamNote: string = "";
  institutionType: string;
  finalYearGrade: string = "";
  averageGrade: string = "";
  studyLevel: string;
  studySystem: string;
  institutionName: string = "";
  option: string = "Choisissez une option";
  acceptedTerms: boolean = false;

  system: EducationSystem;

  listOfSeries: string[];
  listOfInstitutions: string[];
  listOfOptions: string[];
  listOfStudyLevels: string[];
  listOfBacYears: string[] = ["Année d'obtention du Bac"];

  constructor(private userService: UserService, private router: Router) {
    let user = userService.getLocalUser();

    if(user.educationLevel == "" || user.educationSystem == ""){
      router.navigateByUrl("step1");
    }
    
    this.studyLevel = user.educationLevel;
    this.studySystem = user.educationSystem;

    this.bacObtained = user.bacLevel == educationLevels[0]

    let maxYear: number = new Date().getFullYear();
    for (let i = maxYear; i >= 2000; i--) {
      this.listOfBacYears.push(i.toString());
    }

    this.system = educationSystems.find(ed => ed.name == this.studySystem)!;
    this.listOfSeries = ["Choisissez une série"].concat(this.system.series.map(s => s.name));
    this.listOfStudyLevels = ["Niveau d'étude"].concat(studyLevels);
    this.listOfInstitutions = ["Type d'établissement"].concat(bacInstitutionTypes);
    this.listOfOptions = ["Choisissez une option"];

    this.serie = this.listOfSeries[0];
    this.studyLevel = this.listOfStudyLevels[0];
    this.institutionType = this.listOfInstitutions[0];
    this.onSerieChanged();
  }

  onSerieChanged() {
    let currentSerie: Serie | undefined = this.system.series.find(s => s.name == this.serie);
    this.listOfOptions = ["Choisissez une option"];
    if (currentSerie) {
      this.listOfOptions = this.listOfOptions.concat(currentSerie.options);
    }
  }

  uploadUser(){
    let user = this.userService.getLocalUser();
    user.bacAcquisitionYear = Number(this.bacYear);
    user.bacSerie = this.serie;
    user.bacOption = this.option;
    user.regionalExamScore = Number(this.regionalExamNote);
    user.nationalExamScore = Number(this.nationalExamNote);
    user.bacAverageScore = Number(this.averageGrade);
    user.finalSchoolYearScore = Number(this.finalYearGrade);
    user.bacInstitution = this.institutionType;
    user.bacInstitutionName = this.institutionName;
    user.massar = this.massarCode;
    this.userService.updateUserInAPI(user).subscribe(
      (s) => {
        this.router.navigateByUrl("portal/dashboard")
      },
      onerror =>{
        console.log(onerror + " error");
      }
    );
  }
}
