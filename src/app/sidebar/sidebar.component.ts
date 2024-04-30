import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NavlinkComponent } from '../navlink/navlink.component';
import { RouterLinkActive } from '@angular/router';
import { Link, Links, links } from '../../models/link';

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
  linkGroup: Links[] = links;

  toggle(){
    this._isVisible = !this.isVisible;
  }
}


