import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Game} from "../../interfaces/game.interface";

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent {

  constructor(
    public dialogRef: MatDialogRef<GameViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Game) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm():void {
    this.dialogRef.close(true)
  }

}
