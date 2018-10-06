import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  value="subscribe me";
  isChecked=true;
  colors=[{
    id:1,name:'red'},{
    id:2,name:'indigo'
  }];

  onChange($event){
    console.log($event);
    
  }
}
