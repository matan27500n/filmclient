import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { ApiResponse } from '../model/api.response';
import { Film } from '../model/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private http: HttpClient) { }
  private baseUrl: string = 'http://localhost:8080/api/films/';

  getFilms(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getFilmById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createFilm(film: Film): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, film);
  }

  updateFilm(id: number, film: Film): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + film.film_id, film);
  }

  deleteFilm(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
