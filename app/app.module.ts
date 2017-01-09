import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app.routing";


import { AppComponent }  from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { CompetitionComponent } from './modules/competition/competition.component';
import { HeaderService } from './shared/header/header.service';



@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule, AppRoutingModule],
  declarations: [ AppComponent, HeaderComponent, HomeComponent, CompetitionComponent],
  providers: 	[HeaderService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
