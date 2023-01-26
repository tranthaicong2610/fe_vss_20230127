import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalerRatioComponent } from './saler-ratio.component';

describe('SalerRatioComponent', () => {
  let component: SalerRatioComponent;
  let fixture: ComponentFixture<SalerRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalerRatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalerRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
