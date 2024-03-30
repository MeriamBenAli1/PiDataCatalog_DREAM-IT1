import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPolicyComponent } from './modifier-policy.component';

describe('ModifierPolicyComponent', () => {
  let component: ModifierPolicyComponent;
  let fixture: ComponentFixture<ModifierPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
