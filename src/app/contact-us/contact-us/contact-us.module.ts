import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent} from "../contact-us.component";
import { ContactUsRoutingModule } from './contact-us-routing.module';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class ContactUsModule { }
