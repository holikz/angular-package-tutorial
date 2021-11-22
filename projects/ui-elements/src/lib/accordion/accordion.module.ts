import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WshAccordionComponent } from './accordion.component';
import { WshAccordionItem } from './directives/accordion-item.directive';
import { WshAccordionHeader } from './directives/accordion-header.directive';
import { WshAccordionTitle } from './directives/accordion-title.directive';
import { WshAccordionContent } from './directives/accordion-content.directive';
import { WshAccordionConfig, WSH_ACCORDION_CONFIG } from './accordion.config';



@NgModule({
  declarations: [
    WshAccordionComponent,
    WshAccordionItem,
    WshAccordionHeader,
    WshAccordionTitle,
    WshAccordionContent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WshAccordionComponent,
    WshAccordionItem,
    WshAccordionHeader,
    WshAccordionTitle,
    WshAccordionContent
  ]
})
export class WshAccordionModule {
  static withConfig(config?: WshAccordionConfig): ModuleWithProviders<WshAccordionModule> {
    return {
      ngModule: WshAccordionModule,
      providers:[
        {
          provide: WSH_ACCORDION_CONFIG,
          useValue: config
        }
      ]
    }
  }
 }
