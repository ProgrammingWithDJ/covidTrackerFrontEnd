import { TestBed } from '@angular/core/testing';

import { DataGlobalserviceService } from './data-globalservice.service';

describe('DataGlobalserviceService', () => {
  let service: DataGlobalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGlobalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
