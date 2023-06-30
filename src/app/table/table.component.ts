import {Component, OnInit} from '@angular/core';
import {flightHotel} from '../models/flightHotel';
import {FlightsHotelsService} from '../service/flights-hotels.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  flightsHotels: flightHotel[] = [];

  constructor(private flightsHotelsService: FlightsHotelsService) {}

  ngOnInit(): void {
    this.flightsHotels = this.flightsHotelsService.getFlightsHotels()
  }
}
