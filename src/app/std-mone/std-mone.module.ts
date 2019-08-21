import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdMconeComponent } from './std-mcone/std-mcone.component';
import { StdMctwoComponent } from './std-mctwo/std-mctwo.component';

@NgModule({
  declarations: [StdMconeComponent, StdMctwoComponent],
  imports: [
    CommonModule
  ]
})
export class StdMOneModule { }
