import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatalogsComponent } from './all-catalogs.component';

describe('AllCatalogsComponent', () => {
  let component: AllCatalogsComponent;
  let fixture: ComponentFixture<AllCatalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCatalogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
