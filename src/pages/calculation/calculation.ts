import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {HomePage} from '../home/home';

/**
 * Generated class for the CalculationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

    ionViewWillEnter(){
    this.storage.get("num")
    .then((val) => {
      this.information1 = val;
    }).catch((err) => {
      console.log(err);
    });
    this.storage.get("resultStr")
    .then((val) => {
      this.information2 = val;
    }).catch((err) => {
      console.log(err);
    });
  }
}
