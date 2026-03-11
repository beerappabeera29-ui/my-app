import { TestBed } from '@angular/core/testing';

import { NuakriService } from './nuakri.service';

describe('NuakriService', () => {
  let service: NuakriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuakriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
