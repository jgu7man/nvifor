import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioServiciosComponent } from './inicio-servicios.component';

describe('InicioServiciosComponent', () => {
  let component: InicioServiciosComponent;
  let fixture: ComponentFixture<InicioServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
