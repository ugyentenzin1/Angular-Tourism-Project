import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Package} from "../Interfaces/packages";

@Injectable({
  providedIn: 'root'
})
export class TrekkingService {

  // httpUrl = "http://localhost:3200"

  constructor(private http: HttpClient) { }
/*
  getTrekking(id: number): Observable<Package[]>{
    return this.http.get<Package[]>(`${this.httpUrl}/packages/${id}`);
  }*/
}
