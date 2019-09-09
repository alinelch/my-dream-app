import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from '././about/about.component';
import { ContactComponent } from '././contact/contact.component';
import { HomeComponent } from '././home/home.component';
//12.1 impor and add to imports array below
import { HttpClientModule } from '@angular/common/http';
//13.1 impor and add to imports array below
import { ReactiveFormsModule } from '@angular/forms';
//import { ComponentsComponent } from './components/components.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
    //ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
