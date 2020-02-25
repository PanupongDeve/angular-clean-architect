import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRxCounterComponent } from './my-counter.component';

describe('MyRxCounterComponent', () => {
  let component: MyRxCounterComponent;
  let fixture: ComponentFixture<MyRxCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRxCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRxCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
