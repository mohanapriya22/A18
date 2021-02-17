import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AngularComponent } from './angular/angular.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"technology",component:TechnologyComponent,
  children:[{path:"angular",component:AngularComponent},
  {path:"javascript",component:JavascriptComponent},
  {path:"**",component:PagenotfoundComponent}]},
  
  {path:"**",component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
