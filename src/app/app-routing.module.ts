import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TechnicalComponent } from './technical/technical.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes : Routes = [

  { path: '', component: LandingPageComponent},
  { path: 'home', component: LandingPageComponent},
  { path: 'technical', component: TechnicalComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'education', component: EducationComponent},
  { path: 'contact', component: ContactComponent}

]  

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{

}
