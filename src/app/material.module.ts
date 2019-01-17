import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
})
export class AppMaterialModule { }
