import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLeftComponent } from './top-left.component';

describe('TopLeftComponent', () => {
  let component: TopLeftComponent;
  let fixture: ComponentFixture<TopLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
