import { ContentChild, Directive, Input } from '@angular/core';
import { WshAccordionContent } from './accordion-content.directive';
import { WshAccordionTitle } from './accordion-title.directive';
import { WshAccordionHeader } from './accordion-header.directive';


@Directive({
  selector: 'wsh-accordion-item'
})
export class WshAccordionItem {

  @Input() title = "";
  @Input() disabled = false;

  @ContentChild(WshAccordionContent) content!: WshAccordionContent;
  @ContentChild(WshAccordionTitle) customTitle!: WshAccordionTitle;
  @ContentChild(WshAccordionHeader) customHeader!: WshAccordionHeader;

  constructor() {}

}
