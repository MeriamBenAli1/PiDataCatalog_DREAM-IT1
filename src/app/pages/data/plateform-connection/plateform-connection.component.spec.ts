import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateformConnectionComponent } from './plateform-connection.component';

describe('PlateformConnectionComponent', () => {
  let component: PlateformConnectionComponent;
  let fixture: ComponentFixture<PlateformConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlateformConnectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlateformConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
