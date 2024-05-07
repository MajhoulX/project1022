import { Component } from '@angular/core';
import { bacInstitutionTypes, seriesType } from '../../models/user';
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
  massarCode: string;
  serie: string;
  bacYear: number;
  regionalExamNote: number;
  nationalExamNote: number;
  institutionType: string;
  finalYearGrade: number;
  averageGrade: number;
  studyLevel: string;
  institutionName: string;
  
  series: string[];
  listOfInstitutions: string[];


  constructor(private userService: UserService){
    let user = userService.getUser;
    this.massarCode = user.massar;
    this.bacYear = 0;
    this.regionalExamNote = 2;
    this.averageGrade = 2;
    this.finalYearGrade = 2;
    this.serie = "Choisissez une série";
    this.institutionType = "Type d'établissement";
    this.studyLevel = "";
    this.nationalExamNote = 2;
    this.institutionName = "";

    this.listOfInstitutions = ["Type d'établissement"].concat(bacInstitutionTypes);
    this.series = ["Choisissez une série"].concat(seriesType);
  }
}
