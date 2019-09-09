import { Component, OnInit } from '@angular/core';
//13.2
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //13.3
  messageForm: FormGroup;
  //13.5
  submitted = false;
  //13.6
  success = false;

  //13.4
  /*constructor(){

  }*/
  constructor(private formBuilder: FormBuilder){
    this.messageForm = this.formBuilder.group({
      name: ['',Validators.required],
      message: ['',Validators.required]
    })

  }
  //13.4

  //13.7
  onSubmit(){
    this.submitted = true;

    if(this.messageForm.invalid){
      return;
    }
    this.success = true;
  }
  //13.7



  ngOnInit() {
  }

}
