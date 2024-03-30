import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesDataComponent } from './references-data.component';

describe('ReferencesDataComponent', () => {
  let component: ReferencesDataComponent;
  let fixture: ComponentFixture<ReferencesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencesDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferencesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
