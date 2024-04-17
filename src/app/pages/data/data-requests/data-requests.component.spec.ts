import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRequestsComponent } from './data-requests.component';

describe('DataRequestsComponent', () => {
  let component: DataRequestsComponent;
  let fixture: ComponentFixture<DataRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
