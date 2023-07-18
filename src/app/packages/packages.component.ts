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
  packagesData!: any[];

  constructor(private packageService: PackagesService,
              private router: Router) { }

  ngOnInit(): void {
  this.subscription = this.packageService.getFireDataTest().subscribe(val => {
    this.packagesData = val;
  })
  }

  ngOnDestroy():void {
    this.subscription && this.subscription.unsubscribe();
  }

  navigateEachComponent(label: string):void {
    this.router.navigate(['/packages', label]);
  }

  showPackages() {
    this.packageShow = !this.packageShow;
   this.test = style({
      background: 'yellow'
    })
  }
}
