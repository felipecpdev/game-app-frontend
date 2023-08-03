import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GameRoutingModule} from './game-routing.module';
import {ListComponent} from './pages/list/list.component';
import {GameComponent} from './layout/game/game.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {NewGameComponent} from './pages/new-game/new-game.component';
import {MaterialModule} from "../material/material.module";
import { GameViewComponent } from './components/game-view/game-view.component';


@NgModule({
  declarations: [
    ListComponent,
    GameComponent,
    NewGameComponent,
    GameViewComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    NgxPaginationModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class GameModule {
}
