import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './component/countries/countries.component';
import { HomeComponent } from './component/home/home.component';
import { MychartsearchComponent } from './mychartsearch/mychartsearch.component';

const routes: Routes = [
  {path :'', component: HomeComponent},
  {path:'countries',component:CountriesComponent},
  {path:'myChart',component:MychartsearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
