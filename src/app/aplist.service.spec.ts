import { TestBed } from '@angular/core/testing';

import { AplistService } from './aplist.service';

describe('AplistService', () => {
  let service: AplistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AplistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
