import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home/borrow/check/matched',
    loadChildren: () => import('./home/borrow/check/matched/matched.module').then(m => m.MatchedPageModule)
  },
  {
    path: 'home/lend/check/matched',
    loadChildren: () => import('./home/lend/check/matched/matched.module').then(m => m.MatchedPageModule)
  },
  {
    path: 'home/borrow/check/matching',
    loadChildren: () => import('./home/borrow/check/matching/matching.module').then(m => m.MatchingPageModule)
  },
  {
    path: 'home/lend/check/matching',
    loadChildren: () => import('./home/lend/check/matching/matching.module').then(m => m.MatchingPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
