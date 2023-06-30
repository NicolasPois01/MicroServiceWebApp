import { TestBed } from '@angular/core/testing';

import { FlightsHotelsService } from './flights-hotels.service';

describe('FlightsHotelsService', () => {
  let service: FlightsHotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsHotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
