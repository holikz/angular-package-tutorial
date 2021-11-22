import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WshAccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: WshAccordionComponent;
  let fixture: ComponentFixture<WshAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WshAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WshAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
