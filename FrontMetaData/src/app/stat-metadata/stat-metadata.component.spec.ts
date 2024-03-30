import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatMetadataComponent } from './stat-metadata.component';

describe('StatMetadataComponent', () => {
  let component: StatMetadataComponent;
  let fixture: ComponentFixture<StatMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatMetadataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
