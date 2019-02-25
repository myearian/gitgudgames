import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { GameRankTableComponent } from './game-rank-table/game-rank-table.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [GameRankTableComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatCardModule
  ]
})
export class MainPageModule { }
