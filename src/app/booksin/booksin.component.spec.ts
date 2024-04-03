import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksinComponent } from './booksin.component';

describe('BooksinComponent', () => {
  let component: BooksinComponent;
  let fixture: ComponentFixture<BooksinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksinComponent]
    });
    fixture = TestBed.createComponent(BooksinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});