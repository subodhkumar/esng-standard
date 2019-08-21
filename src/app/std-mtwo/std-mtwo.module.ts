import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdMcthreeComponent } from './std-mcthree/std-mcthree.component';
import { StdMcfourComponent } from './std-mcfour/std-mcfour.component';

@NgModule({
  declarations: [StdMcthreeComponent, StdMcfourComponent],
  imports: [
    CommonModule
  ]
})
export class StdMTwoModule { }
