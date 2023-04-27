import { Component, OnInit } from '@angular/core';
import {PackageType} from "../../Interfaces/packageType";
import {PackagesService} from "../../Services/packages.service";

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss']
})
export class FestivalComponent implements OnInit {

  festivalsEvents!: PackageType[];

  constructor(private packageService: PackagesService) { }

  ngOnInit(): void {
    this.packageService.getById('1').subscribe(({subPackages})=> {
      this.festivalsEvents = subPackages
    })
  }

}
