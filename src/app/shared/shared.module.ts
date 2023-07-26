import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideComponent } from './components/aside/aside.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    AsideComponent
  ]
})
export class SharedModule { }
