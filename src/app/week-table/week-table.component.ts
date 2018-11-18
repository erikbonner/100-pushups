import { Component, Input } from '@angular/core';
import { Week } from '../shared/week';

@Component({
  selector: 'app-week-table',
  templateUrl: './week-table.component.html',
  styleUrls: ['./week-table.component.scss']
})
export class WeekTableComponent {
  @Input() week: Week;

  displayedColumns: string[] = ['index', 'reps'];
}
