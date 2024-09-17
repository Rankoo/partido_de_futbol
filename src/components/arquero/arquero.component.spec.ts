import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArqueroComponent } from './arquero.component';

describe('ArqueroComponent', () => {
  let component: ArqueroComponent;
  let fixture: ComponentFixture<ArqueroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArqueroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArqueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
