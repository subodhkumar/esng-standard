import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StdMOneModule } from './std-mone/std-mone.module';
import { StdMTwoModule } from './std-mtwo/std-mtwo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StdMOneModule,
    StdMTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
