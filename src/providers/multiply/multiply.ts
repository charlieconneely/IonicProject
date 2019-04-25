import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MultiplyProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MultiplyProvider Provider');
  }

  getGBP(num:number, currency:number):number { 
    return num*currency;
  }

}
