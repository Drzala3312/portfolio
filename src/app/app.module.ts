import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './portfolio/components/about/about.component';
import { EducationComponent } from './portfolio/components/education/education.component';
import { SkillsComponent } from './portfolio/components/skills/skills.component';
import { ExperienceComponent } from './portfolio/components/experience/experience.component';
import { InterestComponent } from './portfolio/components/interest/interest.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProjectsComponent } from './portfolio/components/projects/projects.component';
import { AwardsComponent } from './portfolio/components/awards/awards.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    InterestComponent,
    SideNavComponent,
    ProjectsComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
