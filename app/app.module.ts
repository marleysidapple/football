import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';



@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent],
  providers: 	[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
