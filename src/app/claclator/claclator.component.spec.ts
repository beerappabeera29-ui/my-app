import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaclatorComponent } from './claclator.component';

describe('ClaclatorComponent', () => {
  let component: ClaclatorComponent;
  let fixture: ComponentFixture<ClaclatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaclatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaclatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
