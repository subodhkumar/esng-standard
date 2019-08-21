import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdMcfourComponent } from './std-mcfour.component';

describe('StdMcfourComponent', () => {
  let component: StdMcfourComponent;
  let fixture: ComponentFixture<StdMcfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdMcfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdMcfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
