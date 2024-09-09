import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuadradosMediosPage } from './cuadrados-medios.page';

describe('CuadradosMediosPage', () => {
  let component: CuadradosMediosPage;
  let fixture: ComponentFixture<CuadradosMediosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadradosMediosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
