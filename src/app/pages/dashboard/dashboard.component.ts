import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  id=1111;
  @ViewChild("file") file:ElementRef
  fileList :Set<File> = new Set()
  constructor() { }

  ngOnInit() {
    console.log(this.fileList);
    
  }
  go(){
    console.log("sss");
    
    window.scrollTo(0,800)
  }
  onUpload(){
    this.file.nativeElement.click()
  }
  onFileAdded(){
    this.fileList=this.file.nativeElement.files;
  }
}
