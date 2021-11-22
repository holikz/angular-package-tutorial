import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CService } from '@wsh/common/src/lib/feature-c';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [CService],
  bootstrap: [AppComponent]
})
export class AppModule { }
