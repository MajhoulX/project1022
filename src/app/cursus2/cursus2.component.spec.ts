import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursus2Component } from './cursus2.component';

describe('Cursus2Component', () => {
  let component: Cursus2Component;
  let fixture: ComponentFixture<Cursus2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cursus2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cursus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
