import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPolicyComponent } from './ajouter-policy.component';

describe('AjouterPolicyComponent', () => {
  let component: AjouterPolicyComponent;
  let fixture: ComponentFixture<AjouterPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
