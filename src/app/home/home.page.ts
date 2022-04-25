import { Component } from '@angular/core';
import { movies } from 'src/assets/movies';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public movie = movies;

}
