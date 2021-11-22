import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRouterModule } from './lazy.router';
import { WshAccordionModule } from '@wsh/ui-elements';



@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    LazyRouterModule,
    WshAccordionModule.withConfig({
      collapsing: true
    })
  ]
})
export class LazyModule { }
