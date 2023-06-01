import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ContactUs} from "../Interfaces/contactUs";
import {ContactUsService} from "../Services/contact-us.service";
import {Form, FormControl, FormControlName, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  messages!: Observable<ContactUs[]>;

  constructor(private contactUsServices: ContactUsService ) { }

  ngOnInit(): void {

  }


}
