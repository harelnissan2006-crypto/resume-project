import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  imports: [],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.css'
})
export class PersonalInfo {
  p_title = "Personal Details"
  id: number = 354672869
  first_name = "Yossi"
  last_name = "Cohen"
  age: number = 38
  gender = "Male"
  city = "Kiryat Gat"
}
