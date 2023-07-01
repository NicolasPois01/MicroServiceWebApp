import {Component, OnInit} from '@angular/core';
import {flight} from '../models/flight';
import {hotel} from '../models/hotel';
import {FlightsHotelsService} from '../service/flights-hotels.service';

interface flightsHotelsInterface {
  hotels: hotel[];
  flights: flight[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  hotels: hotel[] = [];
  flights: flight[] = [];

  constructor(private flightsHotelsService: FlightsHotelsService) {}

  async initFlights() {
    let flights_hotels: flightsHotelsInterface = await this.flightsHotelsService.getFlightsHotels();
    this.flights = flights_hotels.flights;
    this.hotels = flights_hotels.hotels;
  }

  ngOnInit(): void {
    this.initFlights();
  }
}
