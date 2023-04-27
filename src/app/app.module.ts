import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import { AboutUsComponent } from './about-us/about-us.component';
import { PackagesComponent } from './packages/packages.component';
import { TransportationComponent } from './transportation/transportation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StaffInfoComponent } from './about-us/staff-info/staff-info.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TravelInfoComponent} from './travel-info/travel-info.component';
import {FormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import { TrekkingComponent } from './packages/trekking/trekking.component';
import {HttpClientModule} from "@angular/common/http";
import { FestivalComponent } from './packages/festival/festival.component';
import { SacredPlacesComponent } from './packages/sacred-places/sacred-places.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    PackagesComponent,
    TransportationComponent,
    ContactUsComponent,
    StaffInfoComponent,
    TravelInfoComponent,
    TrekkingComponent,
    FestivalComponent,
    SacredPlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    ExtendedModule,
    FlexModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
