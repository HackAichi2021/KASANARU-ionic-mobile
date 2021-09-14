import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckPage } from './check.page';

const routes: Routes = [
  {
    path: '',
    component: CheckPage
  },
  {
    path: 'matching',
    loadChildren: () => import('./matching/matching.module').then( m => m.MatchingPageModule)
  },
  {
    path: 'matched',
    loadChildren: () => import('./matched/matched.module').then( m => m.MatchedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckPageRoutingModule {}
