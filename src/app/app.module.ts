import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {ExtendedModule, FlexModule} from "@angular/flex-layout";
import { TransportationComponent } from './transportation/transportation.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TravelInfoComponent} from './travel-info/travel-info.component';
import {FormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTooltipModule} from "@angular/material/tooltip";
import {PackagesModule} from "./packages/packages/packages.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TransportationComponent,
    TravelInfoComponent,
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
        MatExpansionModule,
        MatTooltipModule,
        PackagesModule
    ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
