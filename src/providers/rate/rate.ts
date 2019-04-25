import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class RateProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RateProvider Provider');
  }

  getRateInfo():Observable<any> 
  {
    return this.http.get('http://data.fixer.io/api/latest&access_key=d41539a13419a88e1bd90c597d64bb7a');
  }

}
