import { TestBed } from '@angular/core/testing';

import { ServiciolocalService } from './serviciolocal.service';

describe('ServiciolocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciolocalService = TestBed.get(ServiciolocalService);
    expect(service).toBeTruthy();
  });
});
