import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursus1Component } from './cursus1.component';

describe('Cursus1Component', () => {
  let component: Cursus1Component;
  let fixture: ComponentFixture<Cursus1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cursus1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cursus1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
