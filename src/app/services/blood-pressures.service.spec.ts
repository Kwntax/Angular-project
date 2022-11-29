import { TestBed } from '@angular/core/testing';

import { BloodPressuresService } from './blood-pressures.service';

describe('BloodPressuresService', () => {
  let service: BloodPressuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodPressuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
