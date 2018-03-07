import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiHomeComponent } from './wiki-home.component';

describe('WikiHomeComponent', () => {
  let component: WikiHomeComponent;
  let fixture: ComponentFixture<WikiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
