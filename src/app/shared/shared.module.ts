import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AsideComponent} from './components/aside/aside.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';
import { SkeletonTableComponent } from './components/skeleton-table/skeleton-table.component';


@NgModule({
  declarations: [
    NavbarComponent,
    AsideComponent,
    SpinnerComponent,
    ModalComponent,
    SkeletonTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    AsideComponent,
    SpinnerComponent,
    ModalComponent,
    SkeletonTableComponent
  ]
})
export class SharedModule {
}
