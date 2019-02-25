import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingGamesRoutingModule } from './trending-games-routing.module';
import { GameGraphComponent } from './game-graph/game-graph.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [GameGraphComponent],
  imports: [
    CommonModule,
    TrendingGamesRoutingModule,
    MatCardModule
  ]
})
export class TrendingGamesModule { }
