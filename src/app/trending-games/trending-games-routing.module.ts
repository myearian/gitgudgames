import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameGraphComponent } from './game-graph/game-graph.component';

const routes: Routes = [
  {
    path:'',
    component: GameGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingGamesRoutingModule { }
