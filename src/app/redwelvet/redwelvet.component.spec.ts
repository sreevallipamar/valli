import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedwelvetComponent } from './redwelvet.component';

describe('RedwelvetComponent', () => {
  let component: RedwelvetComponent;
  let fixture: ComponentFixture<RedwelvetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedwelvetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedwelvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
