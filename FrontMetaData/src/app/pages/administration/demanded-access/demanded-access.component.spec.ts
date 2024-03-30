import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandedAccessComponent } from './demanded-access.component';

describe('DemandedAccessComponent', () => {
  let component: DemandedAccessComponent;
  let fixture: ComponentFixture<DemandedAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandedAccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandedAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
