import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberViewComponent } from './number-view.component';

describe('NumberViewComponent', () => {
  let component: NumberViewComponent;
  let fixture: ComponentFixture<NumberViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
