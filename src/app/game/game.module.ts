import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { ListComponent } from './pages/list/list.component';
import { GameComponent } from './layout/game/game.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    ListComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    NgxPaginationModule
  ]
})
export class GameModule { }
