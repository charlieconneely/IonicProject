import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  lat: any;
  long: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
            public geolocation: Geolocation) {
  }

  getLocation() {
    let watch = this.geolocation.watchPosition(); 
    watch.subscribe((data) => {
      this.lat = data.coords.latitude // pass data containing coordinates into lat and long variables 
      this.long = data.coords.longitude
    });
  } 

}
