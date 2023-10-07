import { TestBed } from '@angular/core/testing';

import { ColdService } from './cold.service';

describe('ColdService', () => {
  let service: ColdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
