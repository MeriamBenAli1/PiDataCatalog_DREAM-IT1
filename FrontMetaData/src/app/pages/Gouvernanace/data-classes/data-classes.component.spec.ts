import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataClassesComponent } from './data-classes.component';

describe('DataClassesComponent', () => {
  let component: DataClassesComponent;
  let fixture: ComponentFixture<DataClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataClassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
