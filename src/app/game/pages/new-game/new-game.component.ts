import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {GameService} from "../../services/game.service";
import {Game} from "../../interfaces/game.interface";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent {

  public gameForm = new FormGroup({
    gameName: new FormControl<string>('', {nonNullable: true}),
    description: new FormControl<string>('', {nonNullable: true}),
  });

  constructor(private gameService: GameService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  get currentGame(): Game {
    const game = this.gameForm.value as Game;
    return game;
  }

  goBack(): void {
    this.router.navigateByUrl('game/list')
  }

  onSubmit() {
    console.log(this.gameForm.valid);
    if (this.gameForm.invalid) return;
    this.gameService.createGame(this.currentGame).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl('game/list');
      }
    })
  }
}
