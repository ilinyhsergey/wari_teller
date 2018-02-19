import { TestBed, inject } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import {ErrorResponse} from '../api/generated/model/ErrorResponse';

describe('UtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsService]
    });
  });

  it('should be created', inject([UtilsService], (service: UtilsService) => {
    expect(service).toBeTruthy();
  }));

  it('should be translated with parameters', inject([UtilsService], (service: UtilsService) => {
    const errorResponse: ErrorResponse = {
      code: 'error.during.login',
      message: 'Error during login user {0}: {1}',
      params: [
        'ZizaShopG',
        'Login failed for user : ZizaShopG'
      ]
    };
    expect(service.fillErrorResponseMessage(errorResponse))
      .toEqual('Error during login user ZizaShopG: Login failed for user : ZizaShopG');
  }));
});
