import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Package} from "../Interfaces/packages";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  httpUrl = "http://localhost:3200";

  constructor(private http: HttpClient) { }

  getPackages():Observable<Package[]> {
    return this.http.get<Package[]>(`${this.httpUrl}/packages`)
  }

  getById(id: string): Observable<Package>{
    return this.http.get<Package>(`${this.httpUrl}/packages/${id}`);
  }
}
