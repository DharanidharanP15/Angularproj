import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkExperience } from '../models';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
experienceList:WorkExperience[]=[
  {
    role:"Student Researcher",
    company:"Design and Digital Manufacturing Research Center",
    duration:"2021 -Present",
    description:['']
  },
  {
    role:"Testing and development Intern",
    company:"Brakes India Pvt.ltd",
    duration:"May'23 - July'23",
    description:['']
  },
  {
    role:"Inplant Trainee",
    company:"Tube investments of India Pvt.ltd",
    duration:"Jun'22",
    description:['']
  },
  {
    role:"Student Executive Counsellor",
    company:"CIT-SAE Collegiate Club",
    duration:"May'22 - Present",
    description:['']
  },
  {
    role:"Master Of Ceremony",
    company:"Takshashila",
    duration:"March'22",
    description:['']
  },
  {
    role:"Team captain",
    company:"Team Alpha",
    duration:"National Level Competition on UG/NX CAD Modelling and Drafting",
    description:['']
  },
  {
    role:"Team captain",
    company:"Team Kargo",
    duration:"Aakruti'23",
    description:['']
  },
  {
    role:"Student-Co ordinator",
    company:"CAM Event",
    duration:"Mechgust'23",
    description:['']
  }

]

}
