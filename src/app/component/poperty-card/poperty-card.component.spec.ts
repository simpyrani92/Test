import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopertyCardComponent } from './poperty-card.component';

describe('PopertyCardComponent', () => {
  let component: PopertyCardComponent;
  let fixture: ComponentFixture<PopertyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopertyCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopertyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
