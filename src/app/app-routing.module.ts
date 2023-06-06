import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {TransportationComponent} from "./transportation/transportation.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {TravelInfoComponent} from "./travel-info/travel-info.component";

const routes: Routes = [
  {path: 'home', loadChildren:()=> import('./home/home/home.module').then(val => val.HomeModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about_us', loadChildren:()=> import('./about-us/about-us-module/about-us-module.module').then(val=> val.AboutUsModuleModule)},
  {path: 'travel_info', component: TravelInfoComponent},
  {path: 'packages', loadChildren:()=> import('./packages/packages/packages.module').then(val => val.PackagesModule)},
  {path: 'faq', component: TransportationComponent},
  {path: 'contact_us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
