import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameRankTableComponent } from './game-rank-table/game-rank-table.component';

const routes: Routes = [
  {
    path: '',
    component: GameRankTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
