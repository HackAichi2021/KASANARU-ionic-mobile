import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LendPage } from './lend.page';

const routes: Routes = [
  {
    path: '',
    component: LendPage
  },
  {
    path: 'check',
    loadChildren: () => import('./check/check.module').then( m => m.CheckPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LendPageRoutingModule {}
