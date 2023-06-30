import {Injectable} from '@angular/core';
import {flightHotel} from '../models/flightHotel';

@Injectable({
  providedIn: 'root'
})
export class FlightsHotelsApiService {

  constructor() { }

  getFlightsHotels(): flightHotel[] {
    return [
      {
        flight: {
          code: 'FL123',
          departure: '2023-07-01',
          arrival: '2023-07-02',
        },
        hotel: {
          code: 'HT_ABC',
          checkin: '2023-07-02',
          checkout: '2023-07-10',
        },
      },
      {
        flight: {
          code: 'FL456',
          departure: '2023-08-01',
          arrival: '2023-08-02',
        },
        hotel: {
          code: 'HT_XYZ',
          checkin: '2023-08-02',
          checkout: '2023-08-10',
        },
      },
      {
        flight: {
          code: 'FL789',
          departure: '2023-09-01',
          arrival: '2023-09-02',
        },
        hotel: {
          code: 'HT_DEF',
          checkin: '2023-09-02',
          checkout: '2023-09-10',
        },
      },
      {
        flight: {
          code: 'FL012',
          departure: '2023-10-01',
          arrival: '2023-10-02',
        },
        hotel: {
          code: 'HT_GHI',
          checkin: '2023-10-02',
          checkout: '2023-10-10',
        },
      },
      {
        flight: {
          code: 'FL345',
          departure: '2023-11-01',
          arrival: '2023-11-02',
        },
        hotel: {
          code: 'HT_JKL',
          checkin: '2023-11-02',
          checkout: '2023-11-10',
        },
      },
    ];
  }
}
