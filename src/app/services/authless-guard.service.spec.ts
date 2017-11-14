import { TestBed, inject } from '@angular/core/testing';

import { AuthlessGuard } from './authless-guard.service';

describe('AuthlessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthlessGuard]
    });
  });

  it('should be created', inject([AuthlessGuard], (service: AuthlessGuard) => {
    expect(service).toBeTruthy();
  }));
});
