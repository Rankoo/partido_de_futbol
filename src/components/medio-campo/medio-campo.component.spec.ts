import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioCampoComponent } from './medio-campo.component';

describe('MedioCampoComponent', () => {
  let component: MedioCampoComponent;
  let fixture: ComponentFixture<MedioCampoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedioCampoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedioCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
