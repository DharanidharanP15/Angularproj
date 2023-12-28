import { Component,OnInit } from '@angular/core';
import { Skill } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: '3D Modelling and Drafting',
      level: 'Intermediate',
      rating: 80,
    },
    {
      name: 'CAE',
      level: 'Beginner',
      rating: 50,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermediate',
      rating: 60,
    },
    {
      name: 'CAM',
      level: 'Beginner',
      rating: 50,
    },
    {
      name: 'Product Lifecycle Management',
      level: 'Beginner',
      rating: 80,
    },
    {
      name: 'Additive Manufacturing',
      level: 'Intermediate',
      rating: 80,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}



