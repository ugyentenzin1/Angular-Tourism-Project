import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import emailjs from "@emailjs/browser";

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    focal_name: '',
    email: '',
    arrival_date: '',
    departure_date: '',
    head_count: '',
    social_media_link: '',
    contact_no: '',
    package_name: ''
  })

  constructor(private matDialogRef: MatDialogRef<any>,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  confirmation():void {
    emailjs.init('STJ8qrInWfHf9GXiS');
    emailjs.send("service_65lxr0l","template_uuu26ol",{
      focal_name: this.form.value.focal_name,
      package_name: this.form.value.package_name,
      to_name: "Pala Tours",
      email: this.form.value.email,
      arrival_date: this.form.value.arrival_date,
      departure_date: this.form.value.departure_date,
      head_count: this.form.value.head_count,
      social_media_link: this.form.value.social_media_link,
      contact_no: this.form.value.contact_no,
      reply_to: "Gagel Bhai Jann",
    }).then(value => value);
    confirm('Are you sure want to Book?')
    this.form.reset();
  }

  cancel():void {
    this.matDialogRef.close();
  }

}
