import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioPart3 } from './bio-part3';

describe('BioPart3', () => {
  let component: BioPart3;
  let fixture: ComponentFixture<BioPart3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioPart3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioPart3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
