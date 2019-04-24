import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { RateProvider } from '../../providers/rate/rate';
import {MultiplyProvider} from '../../providers/multiply/multiply';
import { EuroCountriesPage } from '../euro-countries/euro-countries';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  exrates: any = [];
  stocks:any;
  baseStr: any;
  currentDate: any;
  GBPrate: any;
  AUDrate: any;
  NZDrate: any;
  JPYrate: any;
  USDrate: any;
  DKKrate: any;
  PLNrate: any;
  SEKrate: any;
  BGNrate: any;
  HRKrate: any;
  CZKrate: any;
  HUFrate: any;
  RONrate: any;

  result: number;
  number: number;
  currency: number;
  
  constructor(public navCtrl: NavController,
              private rateProvider: RateProvider, 
            private multiplyProvider: MultiplyProvider) {

  }

  ionViewDidLoad(){
    this.rateProvider.getRateInfo().subscribe((data)=>{
      // console.log(data);
      // this.stocks = data;
      // console.log(this.stocks.rates);
      this.GBPrate = data.rates.GBP;
      this.AUDrate = data.rates.AUD;
      this.NZDrate = data.rates.NZD;
      this.JPYrate = data.rates.JPY;
      this.USDrate = data.rates.USD;
      this.DKKrate = data.rates.DKK;
      this.PLNrate = data.rates.PLN;
      this.SEKrate = data.rates.SEK;

      this.BGNrate = data.rates.BGN;
      this.HRKrate = data.rates.HRK;
      this.CZKrate = data.rates.CZK;
      this.HUFrate = data.rates.HUF;
      this.RONrate = data.rates.RON;
      this.baseStr = data.base;
  });

  }

  ngOnInit() {
    
  }

  getGBP() {
    this.result = this.multiplyProvider.getGBP(this.number, this.GBPrate);
  }
  getAUD() {
    this.result = this.number*this.AUDrate;
  }
  getJPY() {
    this.result = this.number*this.JPYrate;
  }
  getUSD() {
    this.result = this.number*this.USDrate;
  }
  getDKK() {
    this.result = this.number*this.DKKrate;
  }
  getPLN() {
    this.result = this.number*this.PLNrate;
  }
  getSEK() {
    this.result = this.number*this.SEKrate;
  }
  getNZD() {
    this.result = this.number*this.NZDrate;
  }
  getBGN() {
    this.result = this.number*this.BGNrate;
  }
  getHRK() {
    this.result = this.number*this.HRKrate;
  }
  getCZK() {
    this.result = this.number*this.CZKrate;
  }
  getHUF() {
    this.result = this.number*this.HUFrate;
  }
  getRON() {
    this.result = this.number*this.RONrate;
  }

  openEUCountries() {
    this.navCtrl.push('EuroCountriesPage');
  }

}

