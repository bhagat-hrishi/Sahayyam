import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DsigninComponent } from './dsignin/dsignin.component';
import { DsignupComponent } from './dsignup/dsignup.component';
import { RsignupComponent } from './rsignup/rsignup.component';
import { RsigninComponent } from './rsignin/rsignin.component';
//for reactive form module
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//both below for  serveices
import { DonorService } from './donor.service';
import { ReceiverService } from './receiver.service';
import { AdminComponent } from './admin/admin.component';
//for http request response
import {HttpClientModule} from '@angular/common/http';

//for google map
import { AgmCoreModule } from '@agm/core';

import { Receiver1Component } from './Receiver/receiver1/receiver1.component';
//for session managment
import { NgxWebstorageModule } from 'ngx-webstorage';
import { Donor1Component } from './Donor/donor1/donor1.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Donor1Guard } from './donor1.guard';
import { ThankyouComponent } from './thankyou/thankyou.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { DeactiveGuard } from './deactive.guard';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapsComponent } from './maps/maps.component';
import { LogoutGuard } from './logout.guard';



@NgModule({
  declarations: [
    AppComponent,
    DsigninComponent,
    DsignupComponent,
    RsignupComponent,
    RsigninComponent,
    AdminComponent,
    Receiver1Component,
    Donor1Component,
    ThankyouComponent,
    HomeComponent,
    AboutComponent,
   
    FooterComponent,
    MapsComponent
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places']
    }),
],
  providers: [DonorService, ReceiverService, Donor1Guard, DeactiveGuard,LogoutGuard],//registering services
  bootstrap: [AppComponent]
})
export class AppModule { }
