import { Component } from '@angular/core';
import { Serie, bacInstitutionTypes, educationSystems, studyLevels } from '../../models/user';
import { UserService } from '../../services/UserService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursus2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cursus2.component.html',
  styleUrl: './cursus2.component.scss'
})
export class Cursus2Component {
  bacObtained:boolean;
  massarCode: string;
  serie: string;
  bacYear: string;
  regionalExamNote: string;
  nationalExamNote: string;
  institutionType: string;
  finalYearGrade: string;
  averageGrade: string;
  studyLevel: string;
  institutionName: string;
  option:string;
  acceptedTerms: boolean;
  
  listOfSeries: string[];
  listOfInstitutions: string[];
  listOfOptions: string[];
  listOfStudyLevels: string[];
  listOfBacYears: string[];


  constructor(private userService: UserService){
    this.bacObtained = userService.getUser.educationLevel == "Bac obtenu";
    this.massarCode = "";
    this.regionalExamNote = "";
    this.averageGrade = "";
    this.finalYearGrade = "";
    this.nationalExamNote = "";
    this.institutionName = "";
    this.acceptedTerms = false;
    this.bacYear = "Année d'obtention du Bac";
    this.serie = "Choisissez une série";
    this.institutionType = "Type d'établissement";
    this.studyLevel = "Niveau d'étude";
    this.option = "Choisissez une option";
    this.listOfBacYears = ["Année d'obtention du Bac"];

    let maxYear: number = new Date().getFullYear();
    for(let i = maxYear; i >= 2000; i--){
      this.listOfBacYears.push(i.toString());
    }


    this.listOfSeries = ["Choisissez une série"].concat(educationSystems.flatMap(s => s.series.map(ss => ss.name)));
    this.listOfStudyLevels = ["Niveau d'étude"].concat(studyLevels);
    this.listOfInstitutions = ["Type d'établissement"].concat(bacInstitutionTypes);
    this.listOfOptions = [];
    this.onSerieChanged();
  }

  onSerieChanged(){
    let currentSerie: Serie | undefined = educationSystems.flatMap(ed => ed.series).find(s => s.name == this.serie);
    this.listOfOptions = ["Choisissez une option"];
    if(currentSerie){
      this.listOfOptions = this.listOfOptions.concat(currentSerie.options);
    }
  }
}
