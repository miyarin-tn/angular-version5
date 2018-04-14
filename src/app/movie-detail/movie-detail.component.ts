import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovieFromRoute();
  }

  getMovieFromRoute(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieFromId(id).subscribe(movie => this.movie = movie[0]);
  }

  save(): void {
    this.movieService.updateMovie(this.movie).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
