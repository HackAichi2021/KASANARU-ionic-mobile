import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'lend',
    loadChildren: () => import('./lend/lend.module').then( m => m.LendPageModule)
  },
  {
    path: 'borrow',
    loadChildren: () => import('./borrow/borrow.module').then( m => m.BorrowPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
