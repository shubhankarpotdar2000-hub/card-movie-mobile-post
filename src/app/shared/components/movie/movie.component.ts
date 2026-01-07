import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input()movie !: Imovie
  constructor() { }

  ngOnInit(): void {
  }

}
