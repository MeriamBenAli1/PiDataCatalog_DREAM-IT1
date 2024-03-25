import { TestBed } from '@angular/core/testing';

import { MeadataService } from './meadata.service';

describe('MeadataService', () => {
  let service: MeadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
