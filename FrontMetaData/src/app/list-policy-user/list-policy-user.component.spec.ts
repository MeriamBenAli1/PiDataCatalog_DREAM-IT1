import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPolicyUserComponent } from './list-policy-user.component';

describe('ListPolicyUserComponent', () => {
  let component: ListPolicyUserComponent;
  let fixture: ComponentFixture<ListPolicyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPolicyUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPolicyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
