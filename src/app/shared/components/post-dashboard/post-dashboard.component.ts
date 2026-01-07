import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';
import { postData } from '../../consts/post';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

postArr : Array<Ipost> = postData

}
