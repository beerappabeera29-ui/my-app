import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vechicle2Component } from './vechicle2.component';

describe('Vechicle2Component', () => {
  let component: Vechicle2Component;
  let fixture: ComponentFixture<Vechicle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vechicle2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vechicle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
