import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu: { label: string, link: string }[]
  // menu: { label: string, link: string }[] = menu
  constructor(
    private menuService:MenuService
  ) { }

  ngOnInit() {
    this.menu=this.menuService.getMenu()
  }
  toggle() {

  }
}
