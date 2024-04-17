import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsPDFComponentComponent } from './statistics-pdfcomponent.component';

describe('StatisticsPDFComponentComponent', () => {
  let component: StatisticsPDFComponentComponent;
  let fixture: ComponentFixture<StatisticsPDFComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsPDFComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatisticsPDFComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
