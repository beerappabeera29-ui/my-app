import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurcilComponent } from './curcil.component';

describe('CurcilComponent', () => {
  let component: CurcilComponent;
  let fixture: ComponentFixture<CurcilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurcilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurcilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
