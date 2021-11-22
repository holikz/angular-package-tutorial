import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { WshAccordionModule } from '@wsh/ui-elements';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WshAccordionModule.withConfig({
      collapsing: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
