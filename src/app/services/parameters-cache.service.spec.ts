import { TestBed, inject } from '@angular/core/testing';

import { ParametersCacheService } from './parameters-cache.service';

describe('ParametersCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParametersCacheService]
    });
  });

  it('should be created', inject([ParametersCacheService], (service: ParametersCacheService) => {
    expect(service).toBeTruthy();
  }));
});
