import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-calculation',
  templateUrl: 'calculation.html',
})
export class CalculationPage {
  information1: any;
  information2: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculationPage');
  }

  openHomePage() {
    this.navCtrl.push(HomePage);
  }

    ionViewWillEnter(){ // retrieve data storage info
    this.storage.get("num") // user-input number 
    .then((val) => {
      this.information1 = val;
    }).catch((err) => {
      console.log(err);
    });
    this.storage.get("resultStr") // result of calculation
    .then((val) => {
      this.information2 = val;
    }).catch((err) => {
      console.log(err);
    });
  }
}
