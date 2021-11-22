import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[wshAccordionTitle]'
})
export class WshAccordionTitle {

  constructor(public templateRef: TemplateRef<any>) { }

}
