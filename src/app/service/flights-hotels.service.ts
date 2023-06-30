import { Injectable } from '@angular/core';
import {FlightsHotelsApiService} from './flights-hotels-api.service';
import {flightHotel} from '../models/flightHotel';

@Injectable({
  providedIn: 'root'
})
export class FlightsHotelsService {

  constructor(private flightsHotelsApi: FlightsHotelsApiService) { }

  getFlightsHotels(): flightHotel[] {
    return this.flightsHotelsApi.getFlightsHotels();
  }
}
