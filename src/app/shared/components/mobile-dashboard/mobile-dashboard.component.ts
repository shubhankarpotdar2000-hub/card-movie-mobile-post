import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../models/mobile';
import { mobileProducts } from '../../consts/mobile';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mobileArr: Imobile[] = mobileProducts
}
