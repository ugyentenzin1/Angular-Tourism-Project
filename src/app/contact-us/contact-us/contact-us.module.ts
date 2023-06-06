import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent} from "../contact-us.component";
import { ContactUsRoutingModule } from './contact-us-routing.module';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    MatInputModule,
  ]
})
export class ContactUsModule { }
