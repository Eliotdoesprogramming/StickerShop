import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuchasePolicyComponent } from './puchase-policy.component';

describe('PuchasePolicyComponent', () => {
  let component: PuchasePolicyComponent;
  let fixture: ComponentFixture<PuchasePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuchasePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuchasePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
