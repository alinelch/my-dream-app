import { Component, OnInit } from '@angular/core';

@Component({
  //2.5
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
//3.4
  appTitle: string = 'myapp'
  
  constructor() { }

  ngOnInit() {
  }

}
