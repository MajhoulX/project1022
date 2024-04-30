import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  @Output() onSidebarToggleClicked = new EventEmitter<void>();
  toggleSidebar(): void{
    this.onSidebarToggleClicked.emit();
  }
}
