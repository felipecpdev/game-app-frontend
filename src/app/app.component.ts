import {Component, OnInit} from '@angular/core';
import {initFlowbite, initModals} from 'flowbite'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'game-app-frontend';

  ngOnInit() {
    initFlowbite();
  }
}
