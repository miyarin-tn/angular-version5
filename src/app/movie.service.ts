import { Injectable } from '@angular/core';
// import { fakeMovies } from './fake-movies';
import { Movie } from '../models/movie';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, map, catchError } from 'rxjs/operators';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class MovieService {
  private url = 'http://miyarin.tk/thinh/learn-angular/php/person.php';
  getMovies(): Observable<Movie[]> {
    // this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`);
    // return of(fakeMovies);
    return this.http.get<Movie[]>(this.url).pipe(
      tap(data => data),
      catchError(error => of([]))
    );
  }
  getMovieFromId(id: number): Observable<Movie> {
    // return of(fakeMovies.find(movie => movie.id === id));
    return this.http.get<Movie>(this.url + '?id=' + id).pipe(
      tap(data => data),
      catchError(error => of(new Movie()))
    );
  }
  updateMovie(movie: Movie): Observable<any> {
    return this.http.put(this.url + '?id=' + movie.id, movie, httpOptions).pipe(
      tap(updatedMovie => console.log(`updated movie = ${JSON.stringify(updatedMovie)}`)),
      catchError(error => of(new Movie()))
    );
  }
  addMovie(movie): Observable<any> {
    return this.http.post(this.url, movie, httpOptions).pipe(
      tap(
        data => data,
        error => console.log(error)
      ),
      catchError(error => of(new Movie()))
    );
  }

  deleteMovie(movieId: number): Observable<Movie> {
    const url = `${this.url}/${movieId}`;
    return this.http.delete<Movie>(this.url, httpOptions).pipe(
      tap(_ => console.log(`Deleted movie with id = ${movieId}`)),
      catchError(error => of(null))
    );
  }

  searchMovies(typedString: string): Observable<Movie[]> {
    if (!typedString.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.url}?name_like=${typedString}`).pipe(
      tap(foundedMovies => console.log(`founded movies = ${JSON.stringify(foundedMovies)}`)),
      catchError(error => of(null))
    );
  }

  constructor(
    public messageService: MessageService,
    private http: HttpClient
  ) { }

}
