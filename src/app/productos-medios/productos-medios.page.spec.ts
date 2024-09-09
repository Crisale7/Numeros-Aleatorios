import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosMediosPage } from './productos-medios.page';

describe('ProductosMediosPage', () => {
  let component: ProductosMediosPage;
  let fixture: ComponentFixture<ProductosMediosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosMediosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
