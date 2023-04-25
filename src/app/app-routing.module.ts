import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PackagesComponent} from "./packages/packages.component";
import {TransportationComponent} from "./transportation/transportation.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {TravelInfoComponent} from "./travel-info/travel-info.component";
import {TrekkingComponent} from "./packages/trekking/trekking.component";
import {SacredPlacesComponent} from "./packages/sacred-places/sacred-places.component";
import {FestivalComponent} from "./packages/festival/festival.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about_us', component: AboutUsComponent},
  {path: 'travel_info', component: TravelInfoComponent},
  {path: 'packages', component: PackagesComponent},
  {path: 'packages/trekking', component: TrekkingComponent},
  {path: 'packages/sacred_places', component: SacredPlacesComponent},
  {path: 'packages/festival', component: FestivalComponent},
  {path: 'transportation', component: TransportationComponent},
  {path: 'contact_us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
