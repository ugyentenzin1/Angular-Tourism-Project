import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PackagesService} from "../../../Services/packages.service";
import {Details} from "../../../Interfaces/Details";
import {PackageType} from "../../../Interfaces/packageType";
import {get} from "http";
import {Package} from "../../../Interfaces/packages";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-details-packages',
  templateUrl: './details-packages.component.html',
  styleUrls: ['./details-packages.component.scss']
})
export class DetailsPackagesComponent implements OnInit {

  details?: Details[];

  constructor(private route: ActivatedRoute,
              private packageService: PackagesService) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      switchMap(value => this.packageService.getBySubpackages(value['subId']))
    ).subscribe(({details})=> {
      console.log(details)
      this.details = details;
    })
  }
}
