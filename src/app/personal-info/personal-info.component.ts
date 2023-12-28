import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent implements OnInit {
  
  myData:String[][]=[
    ['Name','Dharanidharan P'],
    ['DOB','15/09/2003'],
    ['Education','Undergrad(2025)'],
    ['Interest','Design and Development'],
    ['Languages Known','English,Tamil']
  ];

  aboutMe:string[]=[
   "I am a dedicated and enthusiastic learner with a profound passion for Mechanical Design and Analysis. My academic journey has been marked by a relentless pursuit of excellence, thriving in various projects that blend theoretical knowledge with practical applications. My commitment to continuous learning has fueled my success in both academic and personal endeavors, where I've harnessed new skills to overcome challenges.",

   "Beyond mechanical engineering, I am also adept at developing frontend websites. Proficient in HTML, CSS, JS, and Angular, I have translated my passion for technology into tangible projects, creating seamless and visually appealing user interfaces. This dual proficiency reflects my versatility and adaptability in navigating different domains of technology and engineering.",
  ];

  constructor() {}

  ngOnInit(): void {}

}


