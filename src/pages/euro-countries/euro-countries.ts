import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-euro-countries',
  templateUrl: 'euro-countries.html',
})
export class EuroCountriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EuroCountriesPage');
  }
}
