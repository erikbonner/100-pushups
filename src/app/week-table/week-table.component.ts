import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Week} from '../shared/week';
import {TimerDialogComponent} from '../timer-dialog/timer-dialog.component';

@Component({
  selector: 'app-week-table',
  templateUrl: './week-table.component.html',
  styleUrls: ['./week-table.component.scss']
})
export class WeekTableComponent {

  @Output() selectedTimeRest = new EventEmitter<number>();

  @Input() week: Week;
  public displayedColumns: string[] = ['index', 'reps'];

  constructor(private readonly dialog: MatDialog) { }

  public startRest(duration: number): void {
    this.dialog.open(TimerDialogComponent, {
      height: '400px',
      width: '400px',
      data: {duration}
    });
  }

  public setExpanded(rest: number): void {
    this.selectedTimeRest.emit(rest);
  }
}
