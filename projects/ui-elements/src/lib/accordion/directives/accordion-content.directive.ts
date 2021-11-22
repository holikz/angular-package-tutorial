import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[wshAccordionContent]'
})
export class WshAccordionContent {

  constructor(public templateRef: TemplateRef<any>) { }

}
