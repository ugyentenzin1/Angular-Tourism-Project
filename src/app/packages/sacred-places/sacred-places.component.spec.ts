import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacredPlacesComponent } from './sacred-places.component';

describe('SacredPlacesComponent', () => {
  let component: SacredPlacesComponent;
  let fixture: ComponentFixture<SacredPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacredPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SacredPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
