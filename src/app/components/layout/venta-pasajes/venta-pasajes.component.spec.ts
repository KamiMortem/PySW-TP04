import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaPasajesComponent } from './venta-pasajes.component';

describe('VentaPasajesComponent', () => {
  let component: VentaPasajesComponent;
  let fixture: ComponentFixture<VentaPasajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaPasajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaPasajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
