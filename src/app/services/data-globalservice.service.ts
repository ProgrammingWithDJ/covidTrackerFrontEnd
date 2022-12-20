import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountrySearch } from '../country-search';

@Injectable({
  providedIn: 'root'
})
export class DataGlobalserviceService {

  private countryUrl='https://api.covid19api.com/total/country/'
  constructor(private httpClient: HttpClient) {
  }

  getCountryData(countryname: string){
    return this.httpClient.get<CountrySearch[]>(`${this.countryUrl}`+ countryname);
  }
}
