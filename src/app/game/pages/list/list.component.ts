import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {HttpParams} from "@angular/common/http";
import {Game} from "../../interfaces/game.interface";
import type {DropdownOptions, DropdownInterface} from "flowbite";
import {Dropdown, initDropdowns} from "flowbite";

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


  options: DropdownOptions = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    onHide: () => {
      console.log('dropdown has been hidden');
    },
    onShow: () => {
      console.log('dropdown has been shown');
    },
    onToggle: () => {
      console.log('dropdown has been toggled');
    }
  };

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
    //initDropdowns();
    this.findAll();
  }

  findAll() {
    let params = new HttpParams()
      .set('pageNo', this.currentPage - 1)
      .set('pageSize', this.tableSize)
      .set('name', this.name);
    this.gameService.getGamePaged(params).subscribe(res => {
      this.games = res.content;
      this.totalElements = res.totalElements;
      this.totalPages = res.totalPages;
      console.log(res);
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

  deleteGame(event: any, id: number) {
    event.preventDefault()
    console.log(id);
    this.gameService.deleteGame(id).subscribe(value => {
        console.log("eliminado" + id);
        this.findAll();
      },
      error => {
        console.error(error)
      })
  }

  ele: any;
  triggerEl: any;
  dropdown: DropdownInterface = new Dropdown();

  click(event: MouseEvent, index: number) {
    event.preventDefault();
    //this.triggerEl = document.getElementById('dropdownDefaultButton' + index);
    this.ele = document.getElementById('dropdown' + index);
    this.ele.classList.toggle('hidden');
    console.log(this.ele.classList);


  }
}
