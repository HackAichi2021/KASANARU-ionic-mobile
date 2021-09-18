import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { NavigationMapComponent } from 'src/app/components/navigation-map/navigation-map.component';

import { GravatarComponent } from '../../../../components/gravatar/gravatar.component';

import { IonicModule } from '@ionic/angular';

import { MatchedPageRoutingModule } from './matched-routing.module';

import { MatchedPage } from './matched.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchedPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [MatchedPage, NavigationMapComponent, GravatarComponent]
})
export class MatchedPageModule { }
