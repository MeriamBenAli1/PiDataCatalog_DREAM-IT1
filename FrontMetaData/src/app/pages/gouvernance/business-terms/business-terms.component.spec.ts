import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTermsComponent } from './business-terms.component';

describe('BusinessTermsComponent', () => {
  let component: BusinessTermsComponent;
  let fixture: ComponentFixture<BusinessTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessTermsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
