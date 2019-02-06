import {Component, HostListener} from '@angular/core';
import { theProgram } from '../shared/the-program.const';
import {TimerDialogComponent} from '../timer-dialog/timer-dialog.component';
import {MatDialog} from '@angular/material';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public readonly theProgram = theProgram;
  private timeToRest = -1;
  private open = false;

  constructor(private readonly dialog: MatDialog) {}

  public startRest(duration: number): void {
    const restDiag = this.dialog.open(TimerDialogComponent, {
      height: '400px',
      width: '400px',
      data: {duration}
    });

    restDiag.afterClosed().pipe(take(1)).subscribe(() => {
      this.open = false;
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent): void {

    if (event.code === 'KeyL' && !this.open && this.timeToRest !== -1) {
      this.open = true;
      this.startRest(this.timeToRest);
    } else if (event.code === 'KeyL' && this.open) {
      this.open = false;
      this.dialog.closeAll();
    }
  }

  public setSelectedDayRest($event: number): void {
    this.timeToRest = $event;
  }
}
