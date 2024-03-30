import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatPolicyComponent } from './stat-policy.component';

describe('StatPolicyComponent', () => {
  let component: StatPolicyComponent;
  let fixture: ComponentFixture<StatPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
