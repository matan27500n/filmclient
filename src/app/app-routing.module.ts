import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFilmComponent } from './film/add-film/add-film.component';

const routes: Routes = [
  { path: '', redirectTo: 'film', pathMatch: 'full' },
  { path: 'add', component: AddFilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
