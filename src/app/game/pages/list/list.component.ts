import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {HttpParams} from "@angular/common/http";
import {Game} from "../../interfaces/game.interface";
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite';
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  games: Game[] = [];
  selectedGame?:Game;
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
              private router: Router) {
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.loadingTable=true;
    let params = new HttpParams()
      .set('pageNo', this.currentPage - 1)
      .set('pageSize', this.tableSize)
      .set('name', this.name);
    this.gameService.getGamePaged(params).subscribe({
      next: (res) => {
        this.games = res.content;
        this.totalElements = res.totalElements;
        this.totalPages = res.totalPages;
        console.log(res);

        setTimeout(() =>{
          this.loadingTable=false;
        }, 1000);


      },
      error: (error) => {
        console.error(error)
        this.loadingTable=false;
      }
    })
  }

  handlePageChange(event: number) {
    this.currentPage = event;
    this.findAll()
  }

  handleNextPage(){
    console.log(this.currentPage);
    this.currentPage++;
    this.findAll()
  }

  handlePreviousPage(){
    console.log(this.currentPage);
    this.currentPage--;
    this.findAll()
  }

  searchByName(): void {
    console.log(this.name);
    this.currentPage = 1;
    this.findAll();
  }

  openModal($event:any,game:Game) {
    this.showModalDelete = true;
    this.selectedGame=game;
  }

  closeModal() {
    this.showModalDelete = false;
  }

  deleteGame(){
    this.loading=true;
    this.gameService.deleteGame(this.selectedGame?.id).subscribe({
        next: (res) => {
          this.closeModal()
          this.loading=false;
          this.findAll();
        },
        error: (error) => {
          this.loading=false;
          console.error(error)
        }
      }
    )
  }

  goNewGame() {
    this.router.navigateByUrl('game/new-game')
  }
}
