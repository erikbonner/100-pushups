import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Week} from '../shared/week';
import {TimerDialogComponent} from '../timer-dialog/timer-dialog.component';

@Component({
  selector: 'app-week-table',
  templateUrl: './week-table.component.html',
  styleUrls: ['./week-table.component.scss']
})
export class WeekTableComponent {
  @Input() week: Week
  displayedColumns: string[] = ['index', 'reps'];

  constructor(private readonly dialog: MatDialog) {
  }
  startRest(duration: number) {
    this.dialog.open(TimerDialogComponent, {
      height: '400px',
      width: '400px',
      data: {duration}
    });
  }
}
