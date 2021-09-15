import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { DestinationMapComponent } from 'src/app/components/destination-map/destination-map.component';

import { IonicModule } from '@ionic/angular';

import { LendPageRoutingModule } from './lend-routing.module';

import { LendPage } from './lend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LendPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [LendPage, DestinationMapComponent]
})
export class LendPageModule { }
