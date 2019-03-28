import { TestBed } from '@angular/core/testing';

import { PredictionService } from './prediction.service';

describe('PredictionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredictionService = TestBed.get(PredictionService);
    expect(service).toBeTruthy();
  });
});
