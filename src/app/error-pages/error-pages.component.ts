import { Component, OnInit ,EventEmitter} from '@angular/core';
import { Observable,Observer,fromEvent, observable, Subject, } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-error-pages',
  templateUrl: './error-pages.component.html',
  styleUrls: ['./error-pages.component.css']
})
export class ErrorPagesComponent implements OnInit {
  scrollEvent=fromEvent(window,"scroll");
  buttonEvent=new EventEmitter()
  clickOb=new Subject()
  constructor() { }

  ngOnInit() {
    this.clickOb.pipe(debounceTime(300))
    .subscribe(e=>{
      console.log(e);
      
    })
  }
  onClick(){
    // this.clickOb.emit("xxx")
    this.clickOb.next("xxx")
  }
  onKeyUp(value:string){
    if(value){
      this.clickOb.next(value.replace(/'/g,""))

    }

  }
  onButtonClick(){
    this.buttonEvent.emit("xxxxx")
  }
}
