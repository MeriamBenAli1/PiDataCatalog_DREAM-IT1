import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatInterfaceComponent } from './stat-interface.component';

describe('StatInterfaceComponent', () => {
  let component: StatInterfaceComponent;
  let fixture: ComponentFixture<StatInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatInterfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
