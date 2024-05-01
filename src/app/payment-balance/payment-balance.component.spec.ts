import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBalanceComponent } from './payment-balance.component';

describe('PaymentBalanceComponent', () => {
  let component: PaymentBalanceComponent;
  let fixture: ComponentFixture<PaymentBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentBalanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
