import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobInfoComponent } from './view-job-info.component';

describe('ViewJobInfoComponent', () => {
  let component: ViewJobInfoComponent;
  let fixture: ComponentFixture<ViewJobInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJobInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
