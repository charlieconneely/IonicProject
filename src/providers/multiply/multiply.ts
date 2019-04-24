import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MultiplyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MultiplyProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MultiplyProvider Provider');
  }

  getGBP(num:number, currency:number):number {
    return num*currency;
  }

}
