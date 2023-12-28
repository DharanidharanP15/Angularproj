import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Unmanned Grounded Vehicle.',
      technologies: 'CAD Modelling, Analysis, Manufacturing, Electronic control systems, and Microcontrollers.',
      description: [ 
      "Fully Automated Grounded Vehicle for Basic human needs to Major Emergencies where a human can't able to do wonders.",
      ],
      link:"https://drive.google.com/file/d/18w0ScL5OKRUjiEjzb3rBWk_uZ7e6KULh/view?usp=sharing",
    },
    {
      title: 'Product Defect Analysis.',
      technologies: 'Product Defect Analysis,7 QC Tools, Overview Of manufacturing Control Plan in Industries, CMM report Generation,High-pressure Die Casting.',
      description: [
        'Researched, anayzed, and proposed the Root cause and Problem solution for the prolonged Crack issue in KAPPA OS (KIA ENGINE OUTERCOVER) for GOKUL AUTOTECH PVT LTD.',
      ],
      link:"",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
