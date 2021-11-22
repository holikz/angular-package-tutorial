import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[wshAccordionHeader]'
})
export class WshAccordionHeader {

  constructor(public templateRef: TemplateRef<any>) { }

}
