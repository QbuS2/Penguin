import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenguinDetailsComponent } from './penguin-details.component';

describe('PenguinDetailsComponent', () => {
  let component: PenguinDetailsComponent;
  let fixture: ComponentFixture<PenguinDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenguinDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenguinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
