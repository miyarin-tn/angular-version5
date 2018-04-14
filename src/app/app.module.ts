import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { MovieService } from './movie.service';
import { MessageService } from './message.service';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessageComponent,
    DashboardComponent,
    MovieSearchComponent,
    EmployeeFormComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
