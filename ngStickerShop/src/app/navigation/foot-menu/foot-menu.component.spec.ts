import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootMenuComponent } from './foot-menu.component';

describe('FootMenuComponent', () => {
  let component: FootMenuComponent;
  let fixture: ComponentFixture<FootMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
