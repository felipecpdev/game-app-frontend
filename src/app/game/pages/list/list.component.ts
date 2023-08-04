import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {HttpParams} from "@angular/common/http";
import {GameDTO} from "../../interfaces/game.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {GameViewComponent} from "../../components/game-view/game-view.component";
import {ToastComponent} from "../../../shared/components/toast/toast.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  games: GameDTO[] = [];
  selectedGame?: GameDTO;
  currentPage: number = 1;
  totalPages: number = 0;
  totalElements: number = 0;
  tableSize: number = 10;
  //tableSizes:any=[10,50,100];

  name = '';
  loading: boolean = false;
  loadingTable: boolean = false;
  showModalDelete: boolean = false;

  constructor(private gameService: GameService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.loadingTable = true;
    let params = new HttpParams()
      .set('pageNo', this.currentPage - 1)
      .set('pageSize', this.tableSize)
      .set('name', this.name);
    this.gameService.getGamePaged(params).subscribe({
      next: (res) => {
        console.log(res);
        this.games = res.content;
        this.totalElements = res.totalElements;
        this.totalPages = res.totalPages;
        setTimeout(() => {
          this.loadingTable = false;
        }, 1000);
      },
      error: (error) => {
        console.error(error)
        this.loadingTable = false;
      }
    })
  }

  handlePageChange(event: number) {
    this.currentPage = event;
    this.findAll()
  }

  handleNextPage() {
    console.log(this.currentPage);
    this.currentPage++;
    this.findAll()
  }

  handlePreviousPage() {
    console.log(this.currentPage);
    this.currentPage--;
    this.findAll()
  }

  searchByName(): void {
    console.log(this.name);
    this.currentPage = 1;
    this.findAll();
  }

  openModal($event: any, game: GameDTO) {
    this.showModalDelete = true;
    this.selectedGame = game;
  }

  closeModal() {
    this.showModalDelete = false;
  }

  customClass: any = 'custom-snackbar';

  deleteGame() {
    this.loading = true;
    this.gameService.deleteGame(this.selectedGame?.id).subscribe({
        next: (res) => {
          this.closeModal();
          this._snackBar.openFromComponent(ToastComponent, {
            data: {
              type: 'success', message: 'Eliminado correctamente'
            },
            duration: 3000,
            horizontalPosition: "end"
          });
          this.loading = false;
          this.findAll();
        },
        error: (error) => {
          this.closeModal()
          this._snackBar.openFromComponent(ToastComponent, {
            data: {
              type: 'danger', message: 'Ocurrió un error!!'
            },
            duration: 3000,
            horizontalPosition: "end"
          });
          this.loading = false;
          console.error(error)
        }
      }
    )
  }

  goNewGame() {
    this.router.navigateByUrl('game/new-game')
  }

  goEdit(game: GameDTO) {
    this.router.navigateByUrl('/game/edit/' + game.id)
  }

  handleLastPage() {
    console.log(this.totalPages);
    console.log(this.currentPage);
    this.currentPage = this.totalPages;
    this.findAll();
  }

  handleFirstPage() {
    this.currentPage = 1;
    this.findAll()
  }


  gameView(game: GameDTO) {
    this.loading = true;
    this.gameService.getGameById(game.id).subscribe(
      {
        next: (res: GameDTO) => {
          console.log(res);

          this.loading = false;
          const dialogRef = this.dialog.open(GameViewComponent, {
            data: res
          });
        },
        error: (error) => {
          console.error(error);
          this.loading = false;
        }
      }
    )


  }
}
