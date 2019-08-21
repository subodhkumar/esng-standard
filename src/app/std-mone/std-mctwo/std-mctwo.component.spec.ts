import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdMctwoComponent } from './std-mctwo.component';

describe('StdMctwoComponent', () => {
  let component: StdMctwoComponent;
  let fixture: ComponentFixture<StdMctwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdMctwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdMctwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
