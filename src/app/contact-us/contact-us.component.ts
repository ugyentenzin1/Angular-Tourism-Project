import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ContactUs} from "../Interfaces/contactUs";
import {ContactUsService} from "../Services/contact-us.service";
import {Form, FormBuilder, FormControl, FormControlName, FormGroup} from "@angular/forms";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup = this.fb.group({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    subject:'',
    whatsapp_no: ''
});
  messages!: Observable<ContactUs[]>;

  constructor(private contactUsServices: ContactUsService ,
              private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  send(){
    emailjs.send("service_4u6ajkg", "template_heaiy6u", {
      from_name: "sona",
      to_name: "dhew",
      message: "hello world",
      reply_to: "dheew",
    }).then(event  => event);
  }


}
