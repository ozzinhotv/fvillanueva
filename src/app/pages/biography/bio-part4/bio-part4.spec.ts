import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioPart4 } from './bio-part4';

describe('BioPart4', () => {
  let component: BioPart4;
  let fixture: ComponentFixture<BioPart4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioPart4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioPart4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
