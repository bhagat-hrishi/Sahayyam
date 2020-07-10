import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsignupComponent } from './rsignup.component';

describe('RsignupComponent', () => {
  let component: RsignupComponent;
  let fixture: ComponentFixture<RsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
