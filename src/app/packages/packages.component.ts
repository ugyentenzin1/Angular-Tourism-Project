import {Component, OnDestroy, OnInit} from '@angular/core';
import {Package} from "../Interfaces/packages";
import {PackagesService} from "../Services/packages.service";
import {Router} from "@angular/router";
import {AnimationStyleMetadata, style} from "@angular/animations";
import {Observable, Subscription} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";

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
  firebase!: any[];

  constructor(private packageService: PackagesService,
              private router: Router) { }

  ngOnInit(): void {
  // this.subscription =  this.packageService.getPackages().subscribe(
  //     (val) => this.packages = val
  //   );
  this.subscription = this.packageService.getFireDataTest().subscribe(val => {
    console.log(val)
    this.firebase = val
  })
  }

  ngOnDestroy():void {
    this.subscription && this.subscription.unsubscribe();
  }

  // navigateToEachComponent(id:number):void {
  //   this.router.navigate(['packages', id]);
  // }

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
