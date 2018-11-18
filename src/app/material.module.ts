import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  exports: [
    MatTabsModule,
    MatTableModule,
    MatExpansionModule
  ],
})
export class AppMaterialModule { }
