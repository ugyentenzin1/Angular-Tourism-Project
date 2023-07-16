import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {Package} from "../../Interfaces/packages";
import {PackageType} from "../../Interfaces/packageType";
import {ActivatedRoute, Router} from "@angular/router";
import {PackagesService} from "../../Services/packages.service";
import {Subscription, switchMap, tap} from "rxjs";
import {Details} from "../../Interfaces/Details";

@Component({
  selector: 'app-subpackages',
  templateUrl: './subpackages.component.html',
  styleUrls: ['./subpackages.component.scss']
})
export class SubpackagesComponent implements OnInit, OnDestroy {

  subPackages!: PackageType[];
  detailed!: Details;
  title!: Package;
  subscription!: Subscription;

  @Input() packageTitle?: string;
  @Input() content?: boolean = true;

  constructor(private route: ActivatedRoute,
              private packageService: PackagesService,
              private router : Router) {
  }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.pipe(
      switchMap(val => {
        const id = val.get('id');
        return this.packageService.getById(id);
      }),
      tap(value => {
        this.title = value;
        this.subPackages = value.subPackages;
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  details(id:any){
    this.subPackages[id].id
    this.router.navigate([`details`],
      {relativeTo: this.route, queryParams:{subId: id}})

    this.packageService.getBySubpackages(id).subscribe()
  }
}
