import { TestBed } from '@angular/core/testing';

import { ExtractionPdfService } from './extraction-pdf.service';

describe('ExtractionPdfService', () => {
  let service: ExtractionPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractionPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
