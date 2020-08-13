import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAllComponent } from './item-all.component';

describe('ItemAllComponent', () => {
  let component: ItemAllComponent;
  let fixture: ComponentFixture<ItemAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
