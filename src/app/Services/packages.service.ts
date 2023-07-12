import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Package} from "../Interfaces/packages";
import {HttpClient} from "@angular/common/http";
import {PackageType} from "../Interfaces/packageType";
import {Details} from "../Interfaces/Details";
import {TestMpa} from "../Interfaces/testMpa";

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  httpUrl = "http://localhost:3200";

  constructor(private http: HttpClient) { }

  getPackages():Observable<Package[]> {
    return this.http.get<Package[]>(`${this.httpUrl}/packages`)
  }

  getById(id: string | null): Observable<Package>{
    return this.http.get<Package>(`${this.httpUrl}/packages/${id}`);
  }

  getBySubpackages(id: any): Observable<PackageType>{
    return this.http.get<PackageType>(`${this.httpUrl}/packages/${id}`);
  }

  getTest(id:any):Observable<TestMpa> {
    return this.http.get<TestMpa>(`${this.httpUrl}/test/${id}`)
  }
}
