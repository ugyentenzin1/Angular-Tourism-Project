import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Package} from "../Interfaces/packages";
import {PackagesService} from "../Services/packages.service";
import {NavigationEnd, Router} from "@angular/router";
import {PackageType} from "../Interfaces/packageType";
import {AnimationStyleMetadata, style} from "@angular/animations";
import {filter} from "rxjs";

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  packages!: Package[];
  test!: AnimationStyleMetadata;

  packageShow: boolean = false;

  constructor(private packageService: PackagesService,
              private router: Router) { }

  ngOnInit(): void {
    this.packageService.getPackages().subscribe(
      (val) => this.packages = val
    );
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
