import { Component } from '@angular/core';
import { PaymentBalanceComponent } from "../payment-balance/payment-balance.component";

@Component({
    selector: 'app-choice',
    standalone: true,
    templateUrl: './choice.component.html',
    styleUrl: './choice.component.scss',
    imports: [PaymentBalanceComponent]
})
export class ChoiceComponent {

}
