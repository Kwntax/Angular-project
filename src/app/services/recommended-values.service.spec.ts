import { TestBed } from '@angular/core/testing';

import { RecommendedValuesService } from './recommended-values.service';

describe('RecommendedValuesService', () => {
  let service: RecommendedValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendedValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
