import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    {path:'',component:HeaderComponent},
    {path:'about',component:AboutComponent},
    {path:'personal-info',component:PersonalInfoComponent},
    {path:'education',component:EducationComponent},
    {path:'workexperience',component:WorkExperienceComponent},
    {path:'skills',component:SkillsComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'contact',component:ContactComponent},
];
