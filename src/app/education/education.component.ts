import { Component, OnInit } from '@angular/core';
import { Education } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
    educationList:Education[] = [
      {
        institute : "Chennai Institute Of technology",
        course: 'B.E.Mechanical Engineering' ,
        duration:'2021-2025',
        score:'85%',
      },
      {
        institute : "Aditya's Vivekananda Matriculation Higher Secondary School",
        course: 'HSC' ,
        duration:'2020-2021',
        score:'90%',
      }, 
      {
        institute : "Ramakrishna Vidyaalaya Matriculation Higher Secondary School",
        course: 'SSLC' ,
        duration:'2018-2019',
        score:'95%',
      },    
  
      
    ];

  constructor() {}

  ngOnInit(): void {}
}