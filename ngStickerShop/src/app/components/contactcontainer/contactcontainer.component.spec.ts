import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactcontainerComponent } from './contactcontainer.component';

describe('ContactcontainerComponent', () => {
  let component: ContactcontainerComponent;
  let fixture: ComponentFixture<ContactcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
