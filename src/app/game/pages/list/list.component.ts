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

  content:Game[]=[];
  currentPage:number=1;
  totalPages:number=0;
  totalElements:number=0;
  tableSize:number=10;
  tableSizes:any=[10,50,100];

  constructor(private gameService:GameService){
  }

  ngOnInit(){
    this.findAll();
  }

  findAll(){
    let params = new HttpParams()
      .set('pageNo', this.currentPage -1 )
      .set('pageSize', this.tableSize);
    this.gameService.getGamePaged(params).subscribe(res => {
      this.content= res.content;
      this.totalElements=res.totalElements;
      this.totalPages=res.totalPages;
      this.totalElements = res.totalElements;
      console.log(res);
    })
  }

  handlePageChange(event:number) {
    this.currentPage = event;
    this.findAll()
  }

}
