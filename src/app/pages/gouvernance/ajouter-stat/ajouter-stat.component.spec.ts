import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterStatComponent } from './ajouter-stat.component';

describe('AjouterStatComponent', () => {
  let component: AjouterStatComponent;
  let fixture: ComponentFixture<AjouterStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterStatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});