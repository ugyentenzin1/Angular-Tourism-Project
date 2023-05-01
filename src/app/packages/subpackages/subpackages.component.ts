import { Component, OnInit } from '@angular/core';
import {Package} from "../../Interfaces/packages";
import {PackageType} from "../../Interfaces/packageType";
import {ActivatedRoute, Router} from "@angular/router";
import {PackagesService} from "../../Services/packages.service";

@Component({
  selector: 'app-subpackages',
  templateUrl: './subpackages.component.html',
  styleUrls: ['./subpackages.component.scss']
})
export class SubpackagesComponent implements OnInit {

  subPackages!: PackageType[];

  constructor(private route: ActivatedRoute,
              private packageService: PackagesService,
              private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(val => {
      const id = val.get('id');
      console.log(id);
      this.packageService.getById(id).subscribe(({subPackages})=> {
        this.subPackages = subPackages
        }
      )
    })
  }

  details(id:any){
    const details = this.subPackages[id];
    const detailsId = details.id;
    this.router.navigate(['subpackages/details', id])
  }
}
