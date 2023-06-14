import {Component, OnDestroy, OnInit} from '@angular/core';
import {Package} from "../Interfaces/packages";
import {PackagesService} from "../Services/packages.service";
import {Router} from "@angular/router";
import {AnimationStyleMetadata, style} from "@angular/animations";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit, OnDestroy {

  packages!: Package[];
  test!: AnimationStyleMetadata;
  subscription!: Subscription;
  packageShow: boolean = false;

  constructor(private packageService: PackagesService,
              private router: Router) { }

  ngOnInit(): void {
  this.subscription =  this.packageService.getPackages().subscribe(
      (val) => this.packages = val
    );
  }

  ngOnDestroy():void {
    this.subscription && this.subscription.unsubscribe();
  }

  navigateToEachComponent(id:number):void {
    // const selectedPackage = this.packages[id]
    // const packageId = selectedPackage.id
    this.router.navigate(['packages', id]);
  }

  showPackages() {
    this.packageShow = !this.packageShow;
   this.test = style({
      background: 'yellow'
    })
  }
}
