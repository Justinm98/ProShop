import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProposalListComponent } from './job-proposal-list.component';

describe('JobProposalListComponent', () => {
  let component: JobProposalListComponent;
  let fixture: ComponentFixture<JobProposalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobProposalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobProposalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
