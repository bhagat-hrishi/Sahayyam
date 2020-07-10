import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Receiver1Component } from './receiver1.component';

describe('Receiver1Component', () => {
  let component: Receiver1Component;
  let fixture: ComponentFixture<Receiver1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Receiver1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Receiver1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
