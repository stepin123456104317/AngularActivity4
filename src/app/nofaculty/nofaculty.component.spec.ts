import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NofacultyComponent } from './nofaculty.component';

describe('NofacultyComponent', () => {
  let component: NofacultyComponent;
  let fixture: ComponentFixture<NofacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NofacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NofacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
