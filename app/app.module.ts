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
import { FixturesComponent } from './modules/fixtures/fixtures.component';
import { HeaderService } from './shared/header/header.service';
import { CompetitionService } from './modules/competition/competition.service';



@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule, AppRoutingModule],
  declarations: [ AppComponent, HeaderComponent, HomeComponent, CompetitionComponent, FixturesComponent],
  providers: 	[ HeaderService, CompetitionService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
