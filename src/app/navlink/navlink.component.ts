import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ faWind } from '@fortawesome/free-solid-svg-icons';
import { Link } from '../../models/link';
import { RouterLink } from '@angular/router';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";


@Component({
  selector: 'app-navlink',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink,PaymentBalanceComponent],
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.scss'
})
export class NavlinkComponent {
  @Input() link: Link ={
    route: "",
    displayText: "",
    isActive: false,
    icon: ""
  };
}