import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockDebateComponent } from './mock-debate.component';

describe('MockDebateComponent', () => {
  let component: MockDebateComponent;
  let fixture: ComponentFixture<MockDebateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockDebateComponent]
    });
    fixture = TestBed.createComponent(MockDebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
