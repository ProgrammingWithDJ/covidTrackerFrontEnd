import { DatePipe } from '@angular/common';

export class CountriesData {
  Country:string;
  CountryCode:string;
  TotalDeaths:number;
  NewDeaths:number;
  TotalConfirmed:number;
  TotalRecovered:number;
  Date: DatePipe;
  Confirmed:string;

}
