import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
