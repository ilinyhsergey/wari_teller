import { TestBed, inject } from '@angular/core/testing';

import { UnsavedChangesGuard } from './unsaved-changes-guard.service';

describe('UnsavedChangesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsavedChangesGuard]
    });
  });

  it('should be created', inject([UnsavedChangesGuard], (service: UnsavedChangesGuard) => {
    expect(service).toBeTruthy();
  }));
});
