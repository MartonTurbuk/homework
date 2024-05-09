import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayComponentComponent } from './delay-component.component';

describe('DelayComponentComponent', () => {
  let component: DelayComponentComponent;
  let fixture: ComponentFixture<DelayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
