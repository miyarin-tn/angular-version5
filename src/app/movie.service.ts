import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies';
import { Movie } from '../models/movie';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

@Injectable()
export class MovieService {
  getMovies(): Observable<Movie[]> {
    this.messageService.add(`${ new Date().toLocaleString()}. Get movie list`);
    return of(fakeMovies);
  }
  getMovieFromId(id: number): Observable<Movie> {
    return of(fakeMovies.find(movie => movie.id === id));
  }
  constructor(public messageService: MessageService) { }

}
