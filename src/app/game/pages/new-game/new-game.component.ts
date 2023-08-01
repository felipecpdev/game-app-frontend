import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {GameService} from "../../services/game.service";
import {Game} from "../../interfaces/game.interface";
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  public gameForm = new FormGroup({
    id: new FormControl<number>(0),
    gameName: new FormControl<string>('', {nonNullable: true}),
    description: new FormControl<string>('', {nonNullable: true}),
  });

  constructor(private gameService: GameService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.activatedRoute.params);
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.gameService.getGameById(id)),
      ).subscribe(hero => {
      console.log(hero);
      if (!hero) {
        return this.router.navigateByUrl('/');
      }

      this.gameForm.reset(hero);
      return;
    });


  }

  get currentGame(): Game {
    const game = this.gameForm.value as Game;
    return game;
  }

  goBack(): void {
    this.router.navigateByUrl('game/list')
  }

  onSubmit() {
    if (this.gameForm.invalid) return;
    console.log(this.currentGame);
    if (this.currentGame.id) {
      this.gameService.updateGame(this.currentGame.id, this.currentGame)
        .subscribe(hero => {
          console.log(hero);
        });
      return;
    }

    this.gameService.createGame(this.currentGame).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl('game/list');
      }
    })
  }
}
