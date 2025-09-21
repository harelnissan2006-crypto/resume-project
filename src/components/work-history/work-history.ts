import { Component } from '@angular/core';

@Component({
  selector: 'app-work-history',
  imports: [],
  templateUrl: './work-history.html',
  styleUrl: './work-history.css'
})
export class WorkHistory {
  wh_title = "Work History"
  workTime1: number = 10 
  workPlace1 = "Software Engineer in the army"
  workTime2: number = 3
  workPlace2 = "Cyber Developer at Google"
  workTime3: number = 3
  workPlace3 = "Development Team Manager at Google"
  workTime4: number = 4
  workPlace4 = "Teacher at AmalB in Petah Tikva"
}
