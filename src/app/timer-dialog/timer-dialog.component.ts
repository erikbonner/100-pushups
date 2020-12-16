import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {of} from 'rxjs';

export interface DialogData {
  duration: number;
}

@Component({
  selector: 'app-timer-dialog',
  templateUrl: './timer-dialog.component.html',
  styleUrls: ['./timer-dialog.component.scss'],
})
export class TimerDialogComponent {

  public readonly reset$$ = of(undefined);
  public readonly randomArnie: string;
  public done = false;

  constructor(public dialogRef: MatDialogRef<TimerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    const arnieBytes = [
      'https://sound.peal.io/ps/audios/000/000/127/original/sound_414_%28over_to_down_%29?1469744052',
      'https://sound.peal.io/ps/audios/000/000/092/original/sound_231_%28over_to_down_%29?1469744272',
      'https://sound.peal.io/ps/audios/000/000/133/original/sound_446_%28over_to_down_%29?1469744155',
      'https://sound.peal.io/ps/audios/000/000/083/original/sound_186_%28over_to_down_%29?1469744237',
      'https://sound.peal.io/ps/audios/000/000/123/original/sound_393_%28over_to_down_%29?1469744286',
      'https://sound.peal.io/ps/audios/000/000/090/original/sound_221_%28over_to_down_%29?1469744038'
    ];
    this.randomArnie = arnieBytes[Math.floor(Math.random() * arnieBytes.length)];
  }

  close() {
    this.dialogRef.close();
  }
}
