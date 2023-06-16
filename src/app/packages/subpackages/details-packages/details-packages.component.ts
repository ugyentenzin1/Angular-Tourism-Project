import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PackagesService} from "../../../Services/packages.service";
import {Details} from "../../../Interfaces/Details";
import {PackageType} from "../../../Interfaces/packageType";
import {get} from "http";
import {Package} from "../../../Interfaces/packages";
import {filter, map, Observable, Subscription, switchMap, tap} from "rxjs";
import {TestMpa} from "../../../Interfaces/testMpa";

@Component({
  selector: 'app-details-packages',
  templateUrl: './details-packages.component.html',
  styleUrls: ['./details-packages.component.scss']
})
export class DetailsPackagesComponent implements OnInit {

  details?: TestMpa;
  subscription?: Subscription;

  constructor(private route: ActivatedRoute,
              private packageService: PackagesService) { }

  ngOnInit(): void {
 this.subscription = this.route.queryParams.pipe(
      switchMap(value => this.packageService.getTest(value['subId'])),
      tap(value => this.details = value )
    ).subscribe();
  }
}
