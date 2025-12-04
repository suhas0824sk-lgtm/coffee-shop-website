import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeA } from './home-a';

describe('HomeA', () => {
  let component: HomeA;
  let fixture: ComponentFixture<HomeA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
