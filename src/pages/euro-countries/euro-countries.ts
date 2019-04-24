import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
/**
 * Generated class for the EuroCountriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  // backToRates() {
  //   this.navCtrl.push(HomePage);
  // }
}
