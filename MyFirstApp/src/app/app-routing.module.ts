import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { HomeComponent } from './home/home.component';
import { HttpdataComponent } from './httpdata/httpdata.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { OurTeamComponent } from './our-team/our-team.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'career', component: CareerComponent},
  {path: 'ourteam', component: OurTeamComponent},
  {path: 'ourservices', component: MyservicesComponent},
  {path: 'httpdata', component: HttpdataComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: '**', component: ErrorComponentComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
