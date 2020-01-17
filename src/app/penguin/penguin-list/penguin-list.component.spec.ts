import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinListComponent } from './penguin-list.component';

describe('PenguinListComponent', () => {
  let component: PenguinListComponent;
  let fixture: ComponentFixture<PenguinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenguinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenguinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
