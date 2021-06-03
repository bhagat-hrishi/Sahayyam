import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
 

  

  constructor() { }
  ngOnInit() {
    sessionStorage.clear();
    sessionStorage.setItem('status','app-component');
    
  }
}



  





