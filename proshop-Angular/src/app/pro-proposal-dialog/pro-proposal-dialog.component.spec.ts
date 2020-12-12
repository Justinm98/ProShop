import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProProposalDialogComponent } from './pro-proposal-dialog.component';

describe('ProProposalDialogComponent', () => {
  let component: ProProposalDialogComponent;
  let fixture: ComponentFixture<ProProposalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProProposalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProProposalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
