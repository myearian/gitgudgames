import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'trending',
    loadChildren:'./trending-games/trending-games.module#TrendingGamesModule'
  },
  {
    path: 'main',
    loadChildren:'./main-page/main-page.module#MainPageModule'
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
