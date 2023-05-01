import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PackagesService} from "../../../Services/packages.service";
import {Details} from "../../../Interfaces/Details";

@Component({
  selector: 'app-details-packages',
  templateUrl: './details-packages.component.html',
  styleUrls: ['./details-packages.component.scss']
})
export class DetailsPackagesComponent implements OnInit {

  details!: any | undefined;

  constructor(private route: ActivatedRoute,
              private packageService: PackagesService) { }

  ngOnInit(): void {
    const test =this.route.paramMap.subscribe(val => {
      const id = val.get('id');
      console.log(id);
    })
  }
}
