import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PackagesService} from "../../../Services/packages.service";
import {Subscription, switchMap, tap} from "rxjs";
import {TestMpa} from "../../../Interfaces/testMpa";
import {MatDialog} from "@angular/material/dialog";
import {BookNowComponent} from "./book-now/book-now.component";
import {PackageType} from "../../../Interfaces/packageType";


@Component({
  selector: 'app-details-packages',
  templateUrl: './details-packages.component.html',
  styleUrls: ['./details-packages.component.scss']
})
export class DetailsPackagesComponent implements OnInit, OnDestroy {

  details?: TestMpa;
  subscription?: Subscription;

  constructor(private route: ActivatedRoute,
              private packageService: PackagesService,
              private matDialog: MatDialog) { }

  ngOnInit(): void {
 this.subscription = this.route.queryParams.pipe(
      switchMap(value => this.packageService.getTest(value['subId'])),
      tap(value => this.details = value )
    ).subscribe();
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  openBookModal(): void {
    this.matDialog.open(BookNowComponent, {
      width: '720px',
      closeOnNavigation: true
    })
  }
}
