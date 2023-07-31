import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AsideComponent} from './components/aside/aside.component';
import {SpinnerComponent} from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    NavbarComponent,
    AsideComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    AsideComponent,
    SpinnerComponent
  ]
})
export class SharedModule {
}
