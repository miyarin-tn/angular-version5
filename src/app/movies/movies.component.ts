import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  // selectedMovie: Movie;

  constructor(private movieService: MovieService) { }

  getMoviesFromServices(): void {
    this.movieService.getMovies().subscribe(
      (updatedMovies) => {
        this.movies = updatedMovies;
      }
    );
  }

  ngOnInit() {
    this.getMoviesFromServices();
  }

  // onSelect(movie: Movie): void {
  //   this.selectedMovie = movie;
  //   console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  // }

}
