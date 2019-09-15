import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantComponent } from './mant.component';

describe('MantComponent', () => {
  let component: MantComponent;
  let fixture: ComponentFixture<MantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
