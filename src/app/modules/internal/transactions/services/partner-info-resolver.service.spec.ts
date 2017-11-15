import { TestBed, inject } from '@angular/core/testing';

import { PartnerInfoResolverService } from './partner-info-resolver.service';

describe('PartnerInfoResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartnerInfoResolverService]
    });
  });

  it('should be created', inject([PartnerInfoResolverService], (service: PartnerInfoResolverService) => {
    expect(service).toBeTruthy();
  }));
});
