import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProInfoRegisterComponent } from './pro-info-register.component';

describe('ProInfoRegisterComponent', () => {
  let component: ProInfoRegisterComponent;
  let fixture: ComponentFixture<ProInfoRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProInfoRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProInfoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
