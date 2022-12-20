import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Users } from '../users';
import {ICaseSummary} from '../Interface/IcaseSummary'
import { Observable } from 'rxjs/internal/Observable';


@Injectable({providedIn: 'root'})
export class DataService {

  private globalurl ='http://localhost:43805/api/case/getsummary';

  public firstPage: string="";
  constructor(private httpClient: HttpClient) {


  }

  getGlobalData(): Observable<ICaseSummary[]>{
    return this.httpClient.get<ICaseSummary[]>(`${this.globalurl}`);
  }

  
}
