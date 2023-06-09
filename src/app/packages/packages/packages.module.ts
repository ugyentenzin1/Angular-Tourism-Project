import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent} from "../packages.component";
import { DetailsPackagesComponent} from "../subpackages/details-packages/details-packages.component";
import {SubpackagesComponent} from "../subpackages/subpackages.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    PackagesComponent,
    DetailsPackagesComponent,
    SubpackagesComponent
  ],
    imports: [
        CommonModule,
        PackagesRoutingModule,
        MatExpansionModule,
        MatButtonModule
    ]
})
export class PackagesModule { }
