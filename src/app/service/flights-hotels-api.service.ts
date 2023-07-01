import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsHotelsApiService {

  constructor() { }

  async getFlightsHotels(): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:8090/api/flights")
      .then((value) => value.json())
      .then((value) => {
        resolve(value);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}
