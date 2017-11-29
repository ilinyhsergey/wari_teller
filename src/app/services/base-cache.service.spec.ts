import { TestBed, inject } from '@angular/core/testing';

import { BaseCacheService } from './base-cache.service';

describe('BaseCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseCacheService]
    });
  });

  it('should be created', inject([BaseCacheService], (service: BaseCacheService) => {
    expect(service).toBeTruthy();
  }));
});
