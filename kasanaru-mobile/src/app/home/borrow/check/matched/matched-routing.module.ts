import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchedPage } from './matched.page';

const routes: Routes = [
  {
    path: '',
    component: MatchedPage
  },
  {
    path: 'arrive',
    loadChildren: () => import('./arrive/arrive.module').then( m => m.ArrivePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchedPageRoutingModule {}
