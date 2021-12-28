import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekSelectComponent } from './week-select.component';

describe('WeekSelectComponent', () => {
  let component: WeekSelectComponent;
  let fixture: ComponentFixture<WeekSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
