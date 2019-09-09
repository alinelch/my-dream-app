import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//5.2
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
//5.2

const routes: Routes = [
  //5.1
  { path: '',component: HomeComponent },
  { path: 'about',component: AboutComponent },
  { path: 'contact',component: ContactComponent },
  //5.1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
