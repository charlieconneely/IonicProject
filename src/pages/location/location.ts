import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  lat: any;
  lng: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   this.geolocation.getCurrentPosition().then( pos => {
  //     this.lat = pos.coords.latitude;
  //     this.lng = pos.coords.longitude;
  //   }).catch (err => console.log(err)); 
  // }

}
