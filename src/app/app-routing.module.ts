import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { TrainerPageComponent } from './components/pages/trainer-page/trainer-page.component';
import { CataloguePageComponent } from './components/pages/catalogue-page/catalogue-page.component';


const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'trainer', component: TrainerPageComponent},
  {path:'catalogue', component: CataloguePageComponent},
  {path:'**', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
