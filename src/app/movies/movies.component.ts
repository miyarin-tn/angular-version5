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

  add(username: string, firstname: string): void {
    firstname = firstname.trim();
    const newMovie = {
      firstname: firstname,
      lastname: '',
      username: username,
      password: '',
      action: 'register'
    };
    const params = Object.keys(newMovie).map(function(k) {
      return k + '=' + newMovie[k];
    }).join('&');
    this.movieService.addMovie(params)
      .subscribe(() => this.getMoviesFromServices());
  }

  delete(movieId: number): void {
    this.movieService.deleteMovie(movieId).subscribe(_ => {
      this.movies = this.movies.filter(eachMovie => eachMovie.id !== movieId);
    });
  }

  // onSelect(movie: Movie): void {
  //   this.selectedMovie = movie;
  //   console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  // }

}
