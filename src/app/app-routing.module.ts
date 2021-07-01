import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './portfolio/components/about/about.component';
import { AwardsComponent } from './portfolio/components/awards/awards.component';
import { EducationComponent } from './portfolio/components/education/education.component';
import { ExperienceComponent } from './portfolio/components/experience/experience.component';
import { InterestComponent } from './portfolio/components/interest/interest.component';
import { ProjectsComponent } from './portfolio/components/projects/projects.component';
import { SkillsComponent } from './portfolio/components/skills/skills.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'about',
    pathMatch:'full'
  },
  {
    path: 'about',
    component:AboutComponent,
  },
  {
    path:'experience',
    component:ExperienceComponent
  },{
    path:'education',
    component:EducationComponent
  },
  {
    path:'skills',
    component:SkillsComponent
  },
  {
    path:'interest',
    component:InterestComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'awards',
    component:AwardsComponent
  },
  {
    path: '**', redirectTo: '/'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
