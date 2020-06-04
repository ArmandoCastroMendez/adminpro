import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodefoundComponent } from './nodefound.component';

describe('NodefoundComponent', () => {
  let component: NodefoundComponent;
  let fixture: ComponentFixture<NodefoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodefoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodefoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
