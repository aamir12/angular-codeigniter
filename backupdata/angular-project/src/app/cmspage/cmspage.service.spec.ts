import { TestBed } from '@angular/core/testing';

import { CmspageService } from './cmspage.service';

describe('CmspageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmspageService = TestBed.get(CmspageService);
    expect(service).toBeTruthy();
  });
});
