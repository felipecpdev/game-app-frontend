import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {HttpParams} from "@angular/common/http";
import {Game} from "../../interfaces/game.interface";
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  games: Game[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  totalElements: number = 0;
  tableSize: number = 10;
  //tableSizes:any=[10,50,100];
  name = '';
  loading: boolean = false;
  loadingTable: boolean = false;
  showModalDelete: boolean = false;
  selectedGame?:Game;

  public labels: any = {
    previousLabel: '',
    nextLabel: '',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  constructor(private gameService: GameService) {
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
}
