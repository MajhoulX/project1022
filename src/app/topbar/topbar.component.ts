import { Component, EventEmitter, Output } from '@angular/core';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [PaymentBalanceComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  @Output() onSidebarToggleClicked = new EventEmitter<void>();
  toggleSidebar(): void{
    this.onSidebarToggleClicked.emit();
  }
}
