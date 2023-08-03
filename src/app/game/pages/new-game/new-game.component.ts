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

  loading: boolean = false;

  public gameForm = new FormGroup({
    id: new FormControl<number>(0),
    gameName: new FormControl<string>('', {nonNullable: true}),
    developer: new FormControl<string>('',),
    engine: new FormControl<string>(''),
    active: new FormControl<boolean>(false),
    description: new FormControl<string>('', {nonNullable: true}),
    gameArt: new FormControl<string>(''),
    dateCreated: new FormControl<string>(''),
    lastUpdated: new FormControl<string>(''),
  });

  constructor(private gameService: GameService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.loading = true;
    //TODO: en prod eliminar setTimeout
    setTimeout(() => {
      this.loading = false;

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
    }, 1000);
  }

  get currentGame(): Game {
    return this.gameForm.value as Game;
  }

  goBack(): void {
    this.router.navigateByUrl('game/list')
  }

  onSubmit() {
    console.log(this.gameForm.invalid)
    if (this.gameForm.invalid) return;
    console.log(this.currentGame);
    if (this.currentGame.id) {
      this.gameService.updateGame(this.currentGame.id, this.currentGame)
        .subscribe(hero => {
          console.log(hero);
          this.ngOnInit()
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
