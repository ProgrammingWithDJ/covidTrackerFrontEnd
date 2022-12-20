import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { CountriesComponent } from './component/countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardCardsComponent } from './component/dashboard-cards/dashboard-cards.component';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { MychartsearchComponent } from './mychartsearch/mychartsearch.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardsComponent,
    MychartsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
