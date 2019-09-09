import { Component, OnInit } from '@angular/core';
//11.3
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //7.3
  h1Style6: boolean = false;

  //8.2
  h1Style1: boolean = false;

  //9.2
  h1Style2: boolean = false;

  //10.2
  h1Style3: boolean = false;

  //11.6
  h1Style4: boolean = false;

  //12.5
  users: Object;

  //11.4
  //constructor() { }
  //now use data.(method) when acceing methods from daraservice
  constructor(private data: DataService) { }

  //12.6
  //ngOnInit is angular lifecycle hook
  //executed when this component loads up
  //we want all users to show up by defautl when page loads
  /*ngOnInit() {
  }*/
  ngOnInit() {
    this.data.getUsers().subscribe(data =>{
      this.users = data
      console.log(this.users)
    })
  }


  //6.3
  firstClick(){
    console.log('clicked');
  }
  //6.3

  //8.3
  firstClick6(){
    //7.5
    this.h1Style6 = true;
  }

  firstClick1(){
    //7.5
    this.h1Style1 = true;
  }

  //9.3
  firstClick2(){
    this.h1Style2 = true;
  }

  //10.3
  firstClick3(){
    this.h1Style3 = true;
  }

  //11.5
  firstClick5(){
    this.data.firstClick4();
  }

}
