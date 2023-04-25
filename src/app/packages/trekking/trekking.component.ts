import {Component, Input, OnInit} from '@angular/core';
import {Package} from "../../Interfaces/packages";
import {PackagesService} from "../../Services/packages.service";
import {PackageType} from "../../Interfaces/packageType";

@Component({
  selector: 'app-trekking',
  templateUrl: './trekking.component.html',
  styleUrls: ['./trekking.component.scss']
})
export class TrekkingComponent implements OnInit {

  trekkingPackages!: PackageType[];

  constructor(private packageService: PackagesService) { }

  ngOnInit(): void {
    this.packageService.getById('2').subscribe(({subPackages})=> {
      this.trekkingPackages = subPackages
    });
  }

}
