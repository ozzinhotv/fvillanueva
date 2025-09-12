import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioPart2 } from './bio-part2';

describe('BioPart2', () => {
  let component: BioPart2;
  let fixture: ComponentFixture<BioPart2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioPart2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioPart2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
