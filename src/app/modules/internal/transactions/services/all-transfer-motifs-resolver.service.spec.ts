import { TestBed, inject } from '@angular/core/testing';

import { AllTransferMotifsResolverService } from './all-transfer-motifs-resolver.service';

describe('AllTransferMotifsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllTransferMotifsResolverService]
    });
  });

  it('should be created', inject([AllTransferMotifsResolverService], (service: AllTransferMotifsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
