import {Component, Input} from '@angular/core';
import {Week} from '../shared/week';
import {Subject, timer} from 'rxjs';
import {map, startWith, switchMap, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-week-table',
  templateUrl: './week-table.component.html',
  styleUrls: ['./week-table.component.scss']
})
export class WeekTableComponent {
  @Input() week: Week;

  public countdown = 100;
  public time: number;
  private reset$ = new Subject();

  displayedColumns: string[] = ['index', 'reps'];

  public startCountdown(rest: number) {
    this.countdown = 0;
    const interval = 1000;
    const duration = rest; // zb 60
    this.reset$.next(undefined);

    const stream$ = this.reset$.pipe(
      startWith(undefined),
      switchMap(() => timer(0, interval).pipe(
          takeUntil(timer(duration * interval)),
          tap(x => this.time = duration - x - 1),
          map(value => 100 / duration * value + 100 / duration))
      )
    );
    stream$.subscribe(value => this.countdown = value);
  }
}
