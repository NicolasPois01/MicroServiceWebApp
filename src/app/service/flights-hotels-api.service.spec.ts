import { TestBed } from '@angular/core/testing';

import { FlightsHotelsApiService } from './flights-hotels-api.service';

describe('FlightsHotelsApiService', () => {
  let service: FlightsHotelsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsHotelsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
