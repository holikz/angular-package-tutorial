import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WshButtonDirective } from './button.directive';



@NgModule({
  declarations: [
    WshButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WshButtonDirective
  ],
})
export class WshButtonModule { }
