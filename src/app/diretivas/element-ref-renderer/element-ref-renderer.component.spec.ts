import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementRefRendererComponent } from './element-ref-renderer.component';

describe('ElementRefRendererComponent', () => {
  let component: ElementRefRendererComponent;
  let fixture: ComponentFixture<ElementRefRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementRefRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementRefRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
