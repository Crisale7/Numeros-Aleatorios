import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CongruencialLinealPage } from './congruencial-lineal.page';

describe('CongruencialLinealPage', () => {
  let component: CongruencialLinealPage;
  let fixture: ComponentFixture<CongruencialLinealPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CongruencialLinealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
