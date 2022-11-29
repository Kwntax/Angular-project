import { TestBed } from '@angular/core/testing';

import { BloodGlucosesService } from './blood-glucoses.service';

describe('BloodGlucosesService', () => {
  let service: BloodGlucosesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodGlucosesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
