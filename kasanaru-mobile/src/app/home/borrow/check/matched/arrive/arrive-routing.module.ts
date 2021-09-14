import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrivePage } from './arrive.page';

const routes: Routes = [
  {
    path: '',
    component: ArrivePage
  },
  {
    path: 'share',
    loadChildren: () => import('./share/share.module').then( m => m.SharePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrivePageRoutingModule {}
