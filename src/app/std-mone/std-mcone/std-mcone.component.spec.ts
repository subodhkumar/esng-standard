import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdMconeComponent } from './std-mcone.component';

describe('StdMconeComponent', () => {
  let component: StdMconeComponent;
  let fixture: ComponentFixture<StdMconeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdMconeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdMconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
