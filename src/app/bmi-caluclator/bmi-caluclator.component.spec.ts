import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCaluclatorComponent } from './bmi-caluclator.component';

describe('BmiCaluclatorComponent', () => {
  let component: BmiCaluclatorComponent;
  let fixture: ComponentFixture<BmiCaluclatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCaluclatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiCaluclatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
