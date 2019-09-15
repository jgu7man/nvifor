import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAboutComponent } from './inicio-about.component';

describe('InicioAboutComponent', () => {
  let component: InicioAboutComponent;
  let fixture: ComponentFixture<InicioAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
