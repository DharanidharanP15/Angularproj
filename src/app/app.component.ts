import { Component, ElementRef, HostBinding,ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    encapsulation: ViewEncapsulation.Emulated,
    imports: [CommonModule, RouterOutlet, AboutComponent, ProjectsComponent, WorkExperienceComponent, SkillsComponent, ContactComponent, EducationComponent, PersonalInfoComponent, HeaderComponent]
})

export class AppComponent {
  title = 'My-Portfolio';
  @HostBinding('class.pc') pcMode = false;
  constructor(
    private element: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          for (let breakpoint of Object.keys(result.breakpoints))
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait)
                this.element.nativeElement.classList.remove('pc');

              if (breakpoint === Breakpoints.WebLandscape)
                this.element.nativeElement.classList.add('pc');
            }
        },
      });
    }
  }