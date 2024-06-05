import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './dashboard/login/login.component';
import { NewhomeComponent } from './dashboard/newhome/newhome.component';
import { SignupComponent } from './dashboard/signup/signup.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  
  {path:'',component:DashboardComponent,
children:[
  {path:'newhome',component:NewhomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  { path: 'recipes', component: TutorialsListComponent },
  { path: 'recipes/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent }
  
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
