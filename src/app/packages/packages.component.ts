import {Component, Input, OnInit} from '@angular/core';
import {Package} from "../Interfaces/packages";
import {PackagesService} from "../Services/packages.service";
import {Router} from "@angular/router";
import {PackageType} from "../Interfaces/packageType";

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  packages!: Package[];

  constructor(private packageService: PackagesService,
              private router: Router) { }

  ngOnInit(): void {
    this.packageService.getPackages().subscribe(
     (val) => this.packages = val
   );
  }

  navigateToEachComponent(id:number):void {
    const selectedPackage = this.packages[id]
    const packageId = selectedPackage.id
    this.router.navigate(['subpackages', id]);
  }
}
