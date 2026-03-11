import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuakriComponent } from './nuakri.component';

describe('NuakriComponent', () => {
  let component: NuakriComponent;
  let fixture: ComponentFixture<NuakriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuakriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuakriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
