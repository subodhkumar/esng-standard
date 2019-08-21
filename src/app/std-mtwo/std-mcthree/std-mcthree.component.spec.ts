import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdMcthreeComponent } from './std-mcthree.component';

describe('StdMcthreeComponent', () => {
  let component: StdMcthreeComponent;
  let fixture: ComponentFixture<StdMcthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdMcthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdMcthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
