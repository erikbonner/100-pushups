import { Component } from '@angular/core';
import { theProgram } from '../shared/the-program.const';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public readonly theProgram = theProgram;
}
