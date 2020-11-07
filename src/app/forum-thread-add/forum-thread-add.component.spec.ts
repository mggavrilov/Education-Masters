import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumThreadAddComponent } from './forum-thread-add.component';

describe('ForumThreadAddComponent', () => {
  let component: ForumThreadAddComponent;
  let fixture: ComponentFixture<ForumThreadAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumThreadAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
