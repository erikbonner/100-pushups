import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, Subject, timer} from 'rxjs';
import {map, startWith, switchMap, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  public countdown = 0;
  public time = 0;

  @Input()
  duration = 0;

  @Input()
  reset$: Observable<void>;

  @Output()
  timeout = new EventEmitter<void>();

  public ngOnInit(): void {
    this.countdown = 0;
    const interval = 1000;

    const stream$ = this.reset$.pipe(
      switchMap(() => timer(0, interval).pipe(
        tap(x => this.time = this.duration  - x - 1),
        map(value => 100 / this.duration  * value + 100 / this.duration )),
      ),
      takeUntil(timer(this.duration * interval)),
    );
    stream$.subscribe(
      value => this.countdown = value,
      error => console.error(error),
      () => this.timeout.emit());
  }

}
