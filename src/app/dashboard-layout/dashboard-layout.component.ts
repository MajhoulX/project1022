import { Component, ViewChild } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent, FooterComponent, RouterOutlet],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
  @ViewChild(SidebarComponent) sidebar: SidebarComponent | undefined;

  toggleSidebar(): void {
    if(this.sidebar){
      this.sidebar.toggle();
    }
  }
}
