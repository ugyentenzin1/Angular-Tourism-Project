import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransportationComponent} from "./transportation/transportation.component";
import {TravelInfoComponent} from "./travel-info/travel-info.component";

const routes: Routes = [
  {path: 'home', loadChildren:()=> import('./home/home/home.module').then(val => val.HomeModule)},
  {path: '', redirectTo: 'home/home', pathMatch: 'full'},
  {path: 'about_us', loadChildren:()=> import('./about-us/about-us-module/about-us-module.module').then(val=> val.AboutUsModuleModule)},
  {path: 'travel_info', component: TravelInfoComponent},
  {path: 'packages', loadChildren:()=> import('./packages/packages/packages.module').then(val => val.PackagesModule)},
  {path: 'faq', component: TransportationComponent},
  {path: 'contact_us', loadChildren:()=> import('./contact-us/contact-us/contact-us.module').then(val=> val.ContactUsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
