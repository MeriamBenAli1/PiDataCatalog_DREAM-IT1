import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPDFPolicyComponent } from './export-pdfpolicy.component';

describe('ExportPDFPolicyComponent', () => {
  let component: ExportPDFPolicyComponent;
  let fixture: ComponentFixture<ExportPDFPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportPDFPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportPDFPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
