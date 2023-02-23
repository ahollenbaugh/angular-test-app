import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];
  baseUrl = 'https://localhost:7232/';
  
  constructor(http: HttpClient){ // WITH dependency injection (without, you would write http=new HttpClient)
    // YOU don't instantiate, the LIBRARY does.
    // gets executed/invoked when class is instantiated
    http.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
