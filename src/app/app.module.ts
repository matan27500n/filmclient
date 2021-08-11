import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFilmComponent } from './film/add-film/add-film.component';
import { UpdateFilmComponent } from './film/update-film/update-film.component';
import { FilmsListComponent } from './film/films-list/films-list.component';
import { FormsModule } from '@angular/forms';
import { FilmService } from './service/film.service';

@NgModule({
  declarations: [
    AppComponent,
    AddFilmComponent,
    UpdateFilmComponent,
    FilmsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
