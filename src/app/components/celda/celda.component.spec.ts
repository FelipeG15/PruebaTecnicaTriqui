import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeldaComponent } from './celda.component';

describe('CeldaComponent', () => {
  let component: CeldaComponent;
  let fixture: ComponentFixture<CeldaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeldaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
