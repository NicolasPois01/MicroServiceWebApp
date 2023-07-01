import { Injectable } from '@angular/core';
import {FlightsHotelsApiService} from './flights-hotels-api.service';

@Injectable({
  providedIn: 'root'
})
export class FlightsHotelsService {

  constructor(private flightsHotelsApi: FlightsHotelsApiService) { }

  async getFlightsHotels(): Promise<any> {
    return await this.flightsHotelsApi.getFlightsHotels();
  }
}
