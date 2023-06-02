import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Faq} from "../Interfaces/faq";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  url = " http://localhost:3200/faq"

  constructor(private http: HttpClient,
              ) { }

  getFaq():Observable<Faq[]> {
    return this.http.get<Faq[]>(`${this.url}`);
  }
}
