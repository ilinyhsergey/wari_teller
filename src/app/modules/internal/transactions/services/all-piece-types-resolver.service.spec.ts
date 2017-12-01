import { TestBed, inject } from '@angular/core/testing';

import { AllPieceTypesResolverService } from './all-piece-types-resolver.service';

describe('AllPieceTypesResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllPieceTypesResolverService]
    });
  });

  it('should be created', inject([AllPieceTypesResolverService], (service: AllPieceTypesResolverService) => {
    expect(service).toBeTruthy();
  }));
});
