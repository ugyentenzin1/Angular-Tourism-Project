import {Component, OnDestroy, OnInit} from '@angular/core';
import {Package} from "../../Interfaces/packages";
import {PackageType} from "../../Interfaces/packageType";
import {ActivatedRoute, Router} from "@angular/router";
import {PackagesService} from "../../Services/packages.service";
import {map, pipe, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-subpackages',
  templateUrl: './subpackages.component.html',
  styleUrls: ['./subpackages.component.scss']
})
export class SubpackagesComponent implements OnInit, OnDestroy {

  subPackages!: PackageType[];
  title!: Package;
  subscription!: Subscription;

  constructor(private route: ActivatedRoute,
              private packageService: PackagesService,
              private router : Router) {

    console.log('running')
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(val => {
      const id = val.get('id');
      console.log(id);
       this.subscription =this.packageService.getById(id).pipe(tap(value => {
        this.title = value;
        this.subPackages = value.subPackages;
      })).subscribe()
    })
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  details(id:any){
    this.subPackages[id].id
    this.router.navigate([`details`],
      {relativeTo: this.route, queryParams:{subId: id}})
  }
}
