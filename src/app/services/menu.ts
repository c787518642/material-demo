import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }
  // 导航栏
  getMenu(){

      return [
        { label: "首页", link: "/pages/dashboard" },
        { label: "相册", link: "/pages/posts" },
        { label: "树", link: "/pages/tree" },
        { label: "功能四", link: "/pages/error" },
    ]
  }
}
