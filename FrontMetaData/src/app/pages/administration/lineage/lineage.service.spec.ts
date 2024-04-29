import { TestBed } from '@angular/core/testing';

import { LineageService } from './lineage.service';

describe('LineageService', () => {
  let service: LineageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

