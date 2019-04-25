import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { RateProvider } from '../../providers/rate/rate';
import {MultiplyProvider} from '../../providers/multiply/multiply';
import { EuroCountriesPage } from '../euro-countries/euro-countries';
import { Storage } from '@ionic/storage';
import {CalculationPage} from '../calculation/calculation';
import { LocationPage } from '../location/location';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

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
  resultString: any;
  number: number;
  
  constructor(public navCtrl: NavController,
              private rateProvider: RateProvider, 
              private multiplyProvider: MultiplyProvider,
              private storage: Storage) {

  }

  ionViewDidLoad(){
    this.rateProvider.getRateInfo().subscribe((data)=>{
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
      this.currentDate = data.date;
  });

  }

  ngOnInit() {
    
  }

  getGBP() {
    this.result = this.multiplyProvider.getGBP(this.number, this.GBPrate); // call mulitiply provider 
    this.resultString = "£ " + this.result; // create string with the appropriate currency symbol
  }
  getAUD() {
    this.result = this.number*this.AUDrate; // multiply the user-input number by the rate 
    this.resultString = "$ " + this.result;
  }
  getJPY() {
    this.result = this.number*this.JPYrate;
    this.resultString = "¥ " + this.result;
  }
  getUSD() {
    this.result = this.number*this.USDrate;
    this.resultString = "$ " + this.result;
  }
  getDKK() {
    this.result = this.number*this.DKKrate;
    this.resultString = "Kr. " + this.result;
  }
  getPLN() {
    this.result = this.number*this.PLNrate;
    this.resultString = "zł " + this.result;
  }
  getSEK() {
    this.result = this.number*this.SEKrate;
    this.resultString = "Kr. " + this.result;
  }
  getNZD() {
    this.result = this.number*this.NZDrate;
    this.resultString = "$ " + this.result;
  }
  getBGN() {
    this.result = this.number*this.BGNrate;
    this.resultString = "Лв. " + this.result;
  }
  getHRK() {
    this.result = this.number*this.HRKrate;
    this.resultString = "kn " + this.result;
  }
  getCZK() {
    this.result = this.number*this.CZKrate;
    this.resultString = "Kč " + this.result;
  }
  getHUF() {
    this.result = this.number*this.HUFrate;
    this.resultString = "Ft " + this.result;
  }
  getRON() {
    this.result = this.number*this.RONrate;
    this.resultString = "lei " + this.result;
  }

  openEUCountries() { // open page with euro using countries info
    this.navCtrl.push('EuroCountriesPage');
  }

  openLocationPage() { // open page with lat and long coordinates
    this.navCtrl.push('LocationPage');
  }

  save() { // save calculation in local storage 
    console.log(this.number);
    console.log(this.resultString);
    this.storage.set("num", this.number);
    this.storage.set("resultStr", this.resultString);
  }

  openCalculationPage() { // open page displaying saved calculation
    this.navCtrl.push('CalculationPage');
  }

}

