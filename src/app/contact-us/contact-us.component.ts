import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ContactUs} from "../Interfaces/contactUs";
import {ContactUsService} from "../Services/contact-us.service";
import {Form, FormBuilder, FormControl, FormControlName, FormGroup} from "@angular/forms";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {error} from "@angular/compiler/src/util";

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
    whatsapp_no: '',
    tourist_no: ''
});
  messages!: Observable<ContactUs[]>;

  constructor(private contactUsServices: ContactUsService ,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  send(){
    emailjs.init('STJ8qrInWfHf9GXiS');
    emailjs.send("service_4u6ajkg", "template_heaiy6u", {
      to_name: "Pala Tours and Trek",
      reply_to: "dheew",
      first_name: this.form.value.first_name,
      last_name: this.form.value.last_name,
      email: this.form.value.email,
      message: this.form.value.message,
      whatsapp_no: this.form.value.whatsapp_no,
      tourist_no: this.form.value.tourist_no
    }).then(event  => event);
    alert('Message has been send');
    this.form.reset();
  }
}
