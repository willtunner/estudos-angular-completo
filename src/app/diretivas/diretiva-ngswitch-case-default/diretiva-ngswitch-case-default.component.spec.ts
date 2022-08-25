import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgswitchCaseDefaultComponent } from './diretiva-ngswitch-case-default.component';

describe('DiretivaNgswitchCaseDefaultComponent', () => {
  let component: DiretivaNgswitchCaseDefaultComponent;
  let fixture: ComponentFixture<DiretivaNgswitchCaseDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNgswitchCaseDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNgswitchCaseDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
