import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeaderService } from './shared/header/header.service';



@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, HeaderComponent],
  providers: 	[HeaderService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
