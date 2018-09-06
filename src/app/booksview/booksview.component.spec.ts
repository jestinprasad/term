import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksviewComponent } from './booksview.component';

describe('BooksviewComponent', () => {
  let component: BooksviewComponent;
  let fixture: ComponentFixture<BooksviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
