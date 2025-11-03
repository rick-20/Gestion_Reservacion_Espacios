import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEspacio } from './tipo-espacio';

describe('TipoEspacio', () => {
  let component: TipoEspacio;
  let fixture: ComponentFixture<TipoEspacio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoEspacio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoEspacio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
