import { TestBed } from '@angular/core/testing';

import { BloodCholesterolsService } from './blood-cholesterols.service';

describe('BloodCholesterolsService', () => {
  let service: BloodCholesterolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodCholesterolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
