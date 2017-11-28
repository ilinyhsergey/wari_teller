import { TestBed, inject } from '@angular/core/testing';

import { AllCountriesResolverService } from './all-countries-resolver.service';

describe('AllCountriesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllCountriesResolverService]
    });
  });

  it('should be created', inject([AllCountriesResolverService], (service: AllCountriesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
