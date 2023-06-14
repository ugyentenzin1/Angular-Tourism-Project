import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PackagesComponent} from "../packages.component";
import {SubpackagesComponent} from "../subpackages/subpackages.component";
import {DetailsPackagesComponent} from "../subpackages/details-packages/details-packages.component";

const routes: Routes = [
  {path: 'packages', component: PackagesComponent},
  {path: 'packages/:id', component: SubpackagesComponent},
  {path: 'packages/:id/details', component: DetailsPackagesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }
