import { Component, OnInit } from '@angular/core';
import { movieData } from '../../consts/movie';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  moviesArr = movieData;

}
