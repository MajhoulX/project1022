import { Component } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user:User = new User();

  lastName:string = this.user.lastName;
  firstName:string = this.user.firstName;
  phone:string = this.user.phone;
  email:string = this.user.email;

  logChanges(): void{
    console.log(`${this.lastName}\n${this.firstName}\n${this.email}\n${this.phone}`);
  }
}
