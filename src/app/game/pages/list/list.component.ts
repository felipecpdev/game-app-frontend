import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {HttpParams} from "@angular/common/http";
import {Game} from "../../interfaces/game.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  games:Game[]=[];
  currentPage:number=1;
  totalPages:number=0;
  totalElements:number=0;
  tableSize:number=10;
  //tableSizes:any=[10,50,100];
  name = '';


  public labels: any = {
    previousLabel: '',
    nextLabel: '',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };
  constructor(private gameService:GameService){
  }

  ngOnInit(){
    let targetEl:any = document.getElementById('dropdownDefaultButton');
    let targetElw:any = document.getElementById('dropdown');

    console.log(targetEl);
    console.log(targetElw);
    this.findAll();
  }

  findAll(){
    let params = new HttpParams()
      .set('pageNo', this.currentPage -1 )
      .set('pageSize', this.tableSize)
      .set('name',this.name);
      this.gameService.getGamePaged(params).subscribe(res => {
      this.games= res.content;
      this.totalElements=res.totalElements;
      this.totalPages=res.totalPages;
      console.log(res);
    })
  }

  handlePageChange(event:number) {
    this.currentPage = event;
    this.findAll()
  }

  searchByName(): void {
    console.log(this.name);
    this.currentPage = 1;
    this.findAll();
  }

  deleteGame(event:any,id: number) {
    event.preventDefault()
    console.log(id);
  }
}
