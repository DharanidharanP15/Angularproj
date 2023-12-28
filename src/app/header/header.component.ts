import { Component } from '@angular/core';
import { PersonalInfoComponent } from "../personal-info/personal-info.component";
import { AboutComponent } from "../about/about.component";
import { EducationComponent } from "../education/education.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { WorkExperienceComponent } from "../work-experience/work-experience.component";
import { ContactComponent } from "../contact/contact.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [PersonalInfoComponent, AboutComponent, EducationComponent, SkillsComponent, ProjectsComponent, WorkExperienceComponent, ContactComponent]
})
export class HeaderComponent {
    
}
