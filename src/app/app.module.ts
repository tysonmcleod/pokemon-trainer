import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { TrainerPageComponent } from './components/pages/trainer-page/trainer-page.component';
import { CataloguePageComponent } from './components/pages/catalogue-page/catalogue-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TrainerPageComponent,
    CataloguePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
