import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StdMconeComponent } from './std-mone/std-mcone/std-mcone.component';
import { StdMctwoComponent } from './std-mone/std-mctwo/std-mctwo.component';
import { StdMcthreeComponent } from './std-mtwo/std-mcthree/std-mcthree.component';
import { StdMcfourComponent } from './std-mtwo/std-mcfour/std-mcfour.component';

const routes: Routes = [
  {
    path:'comp1', component: StdMconeComponent
  },
  {
    path: 'comp2', component:StdMctwoComponent
  },
  {
    path:'comp3', component: StdMcthreeComponent
  },
  {
    path:'comp4', component: StdMcfourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
