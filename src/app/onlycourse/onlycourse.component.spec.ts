import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlycourseComponent } from './onlycourse.component';

describe('OnlycourseComponent', () => {
  let component: OnlycourseComponent;
  let fixture: ComponentFixture<OnlycourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlycourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlycourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
