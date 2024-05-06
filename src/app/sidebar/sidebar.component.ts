import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NavlinkComponent } from '../navlink/navlink.component';
import { RouterLinkActive } from '@angular/router';
import { Link, Links } from '../../models/link';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NavlinkComponent, NgFor, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private _isVisible:boolean = true;
  get isVisible(): boolean{
    return this._isVisible;
  } 
  dashboardLink:Link = {
    route: "/dashboard",
    isActive: false,
    displayText: "Tableau de bord",
    icon: ""
  }
  linkGroup: Links[] = [
    {
        title: "Candidature",
        links: [
            { route: "programmes", displayText: "Mes Programmes", isActive: false, icon: "" },
            { route: "frais", displayText: "Frais de concours", isActive: false, icon: "" },
            { route: "choix", displayText: "Choix & Convocations", isActive: false, icon: "" },
            { route: "inscription", displayText: "Inscription", isActive: false, icon: "" }
        ]
    },
    {
        title: "Cursus",
        links: [
            { route: "cursus", displayText: "Mon cursus", isActive: false, icon: "" },
            { route: "profil", displayText: "Profil", isActive: false, icon: "" }
        ]
    }
]

  toggle(){
    this._isVisible = !this.isVisible;
  }
}


