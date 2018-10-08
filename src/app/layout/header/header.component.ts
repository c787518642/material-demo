import { Component, OnInit } from '@angular/core';
import { menu } from '../../services/menu';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu: { label: string, link: string }[] = menu
  constructor() { }

  ngOnInit() {
  }
  toggle() {

  }
}
