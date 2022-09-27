import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes} from '@angular/router';

const route: Routes=[
  {path:"", component:UserComponent},
  { path:"user",component:UserComponent },
  {path:"contact/:Id",component:ContactComponent},
  {path:"details",component:DetailsComponent},
  {path:"**", component:UserComponent}


]
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(route) ],
  declarations: [ AppComponent, HelloComponent,UserComponent,ContactComponent,DetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
