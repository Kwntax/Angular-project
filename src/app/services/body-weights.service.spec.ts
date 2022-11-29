import { TestBed } from '@angular/core/testing';

import { BodyWeightsService } from './body-weights.service';

describe('BodyWeightsService', () => {
  let service: BodyWeightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyWeightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
