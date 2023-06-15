import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaqService} from "../Services/faq.service";
import {Faq} from "../Interfaces/faq";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss']
})
export class TransportationComponent implements OnInit, OnDestroy {

  faq!: Faq[];
  subscription!: Subscription;

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.subscription = this.faqService.getFaq().
      subscribe(val=> this.faq = val)
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

}
