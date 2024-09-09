import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CongruencialMultiplicativoPage } from './congruencial-multiplicativo.page';

describe('CongruencialMultiplicativoPage', () => {
  let component: CongruencialMultiplicativoPage;
  let fixture: ComponentFixture<CongruencialMultiplicativoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CongruencialMultiplicativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
