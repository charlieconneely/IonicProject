import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EuroCountriesPage } from './euro-countries';

@NgModule({
  declarations: [
    EuroCountriesPage,
  ],
  imports: [
    IonicPageModule.forChild(EuroCountriesPage),
  ],
})
export class EuroCountriesPageModule {}
