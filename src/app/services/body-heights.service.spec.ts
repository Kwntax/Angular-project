import { TestBed } from '@angular/core/testing';

import { BodyHeightsService } from './body-heights.service';

describe('BodyHeightsService', () => {
  let service: BodyHeightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyHeightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
