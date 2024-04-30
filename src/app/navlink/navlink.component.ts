import { Component } from '@angular/core';

@Component({
  selector: 'app-navlink',
  standalone: true,
  imports: [],
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.scss'
})
export class NavlinkComponent {
  route:string = "/"
  displayText:string = ""
  isActive:boolean = false
}
