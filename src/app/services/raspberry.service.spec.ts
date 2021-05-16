import { TestBed } from '@angular/core/testing';

import { RaspberryService } from './raspberry.service';

describe('RaspberryService', () => {
  let service: RaspberryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaspberryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
