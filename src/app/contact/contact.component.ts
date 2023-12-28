import { Component } from '@angular/core';
import { contact } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactList:contact[]=[{
    mobile:'9360371714',
    mail:'dharanidharanp8@gmail.com',
  }]
  
  constructor() {}

  ngOnInit(): void {
  }
}
