import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { DestinationMapComponent } from 'src/app/components/destination-map/destination-map.component';

import { IonicModule } from '@ionic/angular';

import { BorrowPageRoutingModule } from './borrow-routing.module';

import { BorrowPage } from './borrow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrowPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [BorrowPage, DestinationMapComponent]
})
export class BorrowPageModule { }
