import { Component, OnInit } from '@angular/core';
import {Package} from "../../Interfaces/packages";
import {PackagesService} from "../../Services/packages.service";
import {PackageType} from "../../Interfaces/packageType";

@Component({
  selector: 'app-sacred-places',
  templateUrl: './sacred-places.component.html',
  styleUrls: ['./sacred-places.component.scss']
})
export class SacredPlacesComponent implements OnInit {

  scaredPlaces!: PackageType[];

  constructor(private packageService: PackagesService) { }

  ngOnInit(): void {
    this.packageService.getById('0').subscribe(({subPackages}) => {
      this.scaredPlaces = subPackages;
    })
  }
}
