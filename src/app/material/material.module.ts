import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import { MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
  ],
  exports:[
    MatDialogModule,
    MatSnackBarModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
