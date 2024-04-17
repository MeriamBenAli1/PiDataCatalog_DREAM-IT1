import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDiscoveryComponent } from './data-discovery.component';

describe('DataDiscoveryComponent', () => {
  let component: DataDiscoveryComponent;
  let fixture: ComponentFixture<DataDiscoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDiscoveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
