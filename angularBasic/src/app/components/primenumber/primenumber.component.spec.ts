import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimenumberComponent } from './primenumber.component';

describe('PrimenumberComponent', () => {
  let component: PrimenumberComponent;
  let fixture: ComponentFixture<PrimenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimenumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
