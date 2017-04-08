/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mycomponent5Component } from './mycomponent5.component';

describe('Mycomponent5Component', () => {
  let component: Mycomponent5Component;
  let fixture: ComponentFixture<Mycomponent5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mycomponent5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mycomponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
