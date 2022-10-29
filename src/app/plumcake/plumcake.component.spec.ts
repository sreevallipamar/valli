import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumcakeComponent } from './plumcake.component';

describe('PlumcakeComponent', () => {
  let component: PlumcakeComponent;
  let fixture: ComponentFixture<PlumcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlumcakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlumcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
