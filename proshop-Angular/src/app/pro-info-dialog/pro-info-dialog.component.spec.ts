import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProInfoDialogComponent } from './pro-info-dialog.component';

describe('ProInfoDialogComponent', () => {
  let component: ProInfoDialogComponent;
  let fixture: ComponentFixture<ProInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
