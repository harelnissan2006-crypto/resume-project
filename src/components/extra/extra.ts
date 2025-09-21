import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extra',
  imports: [FormsModule, CommonModule],
  templateUrl: './extra.html',
  styleUrl: './extra.css'
})
export class Extra {
  e_title = "Extra Details";

  hobbies: string[] = ["Reading", "Traveling", "Mountain Bike Riding"];

  degree1 = "BSc in Computer Science";
  degree2 = "MSc in Cyber Security";
  psychometryScore: number = 720;

  hobby: string = "";

  saveHobby() {
    if (this.hobby.trim() !== "") {
      this.hobbies.push(this.hobby);
      this.hobby = "";
    }
  }
}
