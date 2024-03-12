import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractionPDFComponent } from './extraction-pdf.component';

describe('ExtractionPDFComponent', () => {
  let component: ExtractionPDFComponent;
  let fixture: ComponentFixture<ExtractionPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtractionPDFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtractionPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
