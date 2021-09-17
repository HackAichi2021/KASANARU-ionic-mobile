import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GravatarComponent } from '../components/gravatar/gravatar.component';
import { Md5 } from 'ts-md5/dist/md5';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule
  ],
  declarations: [UserPage, GravatarComponent],
  providers: [Md5]
})
export class UserPageModule { }
