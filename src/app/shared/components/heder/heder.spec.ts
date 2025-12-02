import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heder } from './heder';

describe('Heder', () => {
  let component: Heder;
  let fixture: ComponentFixture<Heder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Heder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
