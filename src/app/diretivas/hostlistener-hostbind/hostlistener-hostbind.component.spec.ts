import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistenerHostbindComponent } from './hostlistener-hostbind.component';

describe('HostlistenerHostbindComponent', () => {
  let component: HostlistenerHostbindComponent;
  let fixture: ComponentFixture<HostlistenerHostbindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostlistenerHostbindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlistenerHostbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
