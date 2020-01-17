import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PenguinComponent } from './penguin/penguin/penguin.component';
import { NewPenguinComponent } from './penguin/new-penguin/new-penguin.component';
import { PenguinListComponent } from './penguin/penguin-list/penguin-list.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'penguin', component: PenguinComponent },
  { path: 'penguin/new', component: NewPenguinComponent },
  { path: 'penguins', component: PenguinListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
