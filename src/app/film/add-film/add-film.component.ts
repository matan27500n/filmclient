import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film.model';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  film: Film = new Film();
  submitted = false;

  constructor(private filmservice: FilmService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.filmservice.createFilm(this.film)
      .subscribe(data => console.log(data), error => console.log(error));
    this.film = new Film();
    this.router.navigate(['/films']);
  }

}
