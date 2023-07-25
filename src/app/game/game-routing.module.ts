import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./pages/list/list.component";
import {GameComponent} from "./layout/game/game.component";

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    children: [
      {
        path: 'list', component: ListComponent
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
