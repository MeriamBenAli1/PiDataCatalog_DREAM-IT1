import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaatBootComponent } from './chaat-boot.component';

describe('ChaatBootComponent', () => {
  let component: ChaatBootComponent;
  let fixture: ComponentFixture<ChaatBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaatBootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaatBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
