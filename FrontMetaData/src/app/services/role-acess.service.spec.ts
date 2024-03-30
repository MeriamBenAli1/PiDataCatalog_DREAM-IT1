import { TestBed } from '@angular/core/testing';

import { RoleAcessService } from './role-acess.service';

describe('RoleAcessService', () => {
  let service: RoleAcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleAcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
