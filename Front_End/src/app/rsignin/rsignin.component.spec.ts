import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsigninComponent } from './rsignin.component';

describe('RsigninComponent', () => {
  let component: RsigninComponent;
  let fixture: ComponentFixture<RsigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
