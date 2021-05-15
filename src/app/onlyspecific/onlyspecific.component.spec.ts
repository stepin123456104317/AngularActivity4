import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyspecificComponent } from './onlyspecific.component';

describe('OnlyspecificComponent', () => {
  let component: OnlyspecificComponent;
  let fixture: ComponentFixture<OnlyspecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyspecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyspecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
