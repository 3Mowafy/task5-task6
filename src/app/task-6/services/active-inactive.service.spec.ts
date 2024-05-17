import { TestBed } from '@angular/core/testing';

import { ActiveInactiveService } from './active-inactive.service';

describe('ActiveInactiveService', () => {
  let service: ActiveInactiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveInactiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
