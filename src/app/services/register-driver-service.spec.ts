import { TestBed } from '@angular/core/testing';

import { DriverRegisterService } from './register-driver-service';

describe('RegisterDriverService', () => {
  let service: DriverRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
