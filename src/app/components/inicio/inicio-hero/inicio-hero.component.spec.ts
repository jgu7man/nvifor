import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioHeroComponent } from './inicio-hero.component';

describe('InicioHeroComponent', () => {
  let component: InicioHeroComponent;
  let fixture: ComponentFixture<InicioHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
