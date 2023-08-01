import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./pages/list/list.component";
import {GameComponent} from "./layout/game/game.component";
import {NewGameComponent} from "./pages/new-game/new-game.component";

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    children: [
      {
        path: 'list', component: ListComponent
      },
      {
        path: 'new-game', component: NewGameComponent
      },
      {
        path: 'edit/:id', component: NewGameComponent
      },
      {
        path: '**', redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
