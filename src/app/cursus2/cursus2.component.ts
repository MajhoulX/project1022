import { Component, OnInit } from '@angular/core';
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
export class Cursus2Component implements OnInit {
  bacObtained: boolean = false;
  massarCode: string = "";
  serie: string = "Choisissez une série";
  bacYear: string = "Année d'obtention du Bac";
  regionalExamNote: string = "";
  nationalExamNote: string = "";
  institutionType: string = "Type d'établissement";
  finalYearGrade: string = "";
  averageGrade: string = "";
  studyLevel: string = "Niveau d'étude";
  institutionName: string = "";
  option: string = "Choisissez une option";
  acceptedTerms: boolean = false;

  listOfSeries: string[];
  listOfInstitutions: string[];
  listOfOptions: string[];
  listOfStudyLevels: string[];
  listOfBacYears: string[] = ["Année d'obtention du Bac"];


  constructor(private userService: UserService) {


    let maxYear: number = new Date().getFullYear();
    for (let i = maxYear; i >= 2000; i--) {
      this.listOfBacYears.push(i.toString());
    }

    this.listOfSeries = ["Choisissez une série"].concat(educationSystems.flatMap(s => s.series.map(ss => ss.name)));
    this.listOfStudyLevels = ["Niveau d'étude"].concat(studyLevels);
    this.listOfInstitutions = ["Type d'établissement"].concat(bacInstitutionTypes);
    this.listOfOptions = [];
    this.onSerieChanged();
  }

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(user => {
        this.bacObtained = user.educationLevel == "Bac obtenu";
      })
  }

  onSerieChanged() {
    let currentSerie: Serie | undefined = educationSystems.flatMap(ed => ed.series).find(s => s.name == this.serie);
    this.listOfOptions = ["Choisissez une option"];
    if (currentSerie) {
      this.listOfOptions = this.listOfOptions.concat(currentSerie.options);
    }
  }
}
