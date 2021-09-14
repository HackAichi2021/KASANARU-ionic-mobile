import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrivePageRoutingModule } from './arrive-routing.module';

import { ArrivePage } from './arrive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrivePageRoutingModule
  ],
  declarations: [ArrivePage]
})
export class ArrivePageModule {}
