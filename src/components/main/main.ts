import { Component } from '@angular/core';
import { Extra } from '../extra/extra';
import { WorkHistory } from '../work-history/work-history';
import { PersonalInfo } from '../personal-info/personal-info';

@Component({
  selector: 'app-main',
  imports: [PersonalInfo, WorkHistory, Extra],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  x: number = 100;
  y: number = 20;
}
