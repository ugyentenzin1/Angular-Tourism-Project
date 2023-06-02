import { Component, OnInit } from '@angular/core';
import {FaqService} from "../Services/faq.service";
import {Faq} from "../Interfaces/faq";

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss']
})
export class TransportationComponent implements OnInit {

  faq!: Faq[];

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.faqService.getFaq().subscribe(val=> this.faq = val )
  }

}
