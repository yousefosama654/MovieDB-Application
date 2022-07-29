import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { GuardGuard } from './guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

const routes: Routes = [
  { path: 'details/:id/:mediatype', component: DetailsComponent },
  { path: 'home',canActivate:[GuardGuard] ,component: HomeComponent },
  { path: '', component: RegisterComponent }, //it is so important to make the default is home
  { path: 'login',component: LoginComponent },
  { path: 'networks', canActivate:[GuardGuard],component: NetworksComponent },
  { path: 'tvshows', canActivate:[GuardGuard],component: TvshowsComponent },
  { path: 'people', canActivate:[GuardGuard],component: PeopleComponent },
  { path: 'movies',canActivate:[GuardGuard], component: MoviesComponent },
  { path: 'register', canActivate:[GuardGuard],component: RegisterComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
