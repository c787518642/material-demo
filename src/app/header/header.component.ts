import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menus=["功能一","功能二","功能三","功能四"]
  constructor() { }

  ngOnInit() {
  }

}
