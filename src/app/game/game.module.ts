import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { ListComponent } from './pages/list/list.component';
import { GameComponent } from './layout/game/game.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ListComponent,
    GameComponent
  ],
    imports: [
        CommonModule,
        GameRoutingModule,
        NgxPaginationModule,
        FormsModule,
        SharedModule
    ]
})
export class GameModule { }
