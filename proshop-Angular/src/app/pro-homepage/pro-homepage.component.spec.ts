import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProHomepageComponent } from './pro-homepage.component';

describe('ProHomepageComponent', () => {
  let component: ProHomepageComponent;
  let fixture: ComponentFixture<ProHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
