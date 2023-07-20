import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import emailjs from '@emailjs/browser';

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

  constructor(private fb: FormBuilder) { }

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
