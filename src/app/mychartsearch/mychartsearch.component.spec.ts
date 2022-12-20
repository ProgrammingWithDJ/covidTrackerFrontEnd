import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MychartsearchComponent } from './mychartsearch.component';

describe('MychartsearchComponent', () => {
  let component: MychartsearchComponent;
  let fixture: ComponentFixture<MychartsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MychartsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MychartsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
