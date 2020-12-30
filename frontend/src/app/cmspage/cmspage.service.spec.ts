import { TestBed } from '@angular/core/testing';

import { CmspageService } from './cmspage.service';

describe('CmspageService', () => {
  let service: CmspageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmspageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
