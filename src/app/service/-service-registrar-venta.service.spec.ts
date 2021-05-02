import { TestBed } from '@angular/core/testing';

import { ServiceRegistrarVentaService } from './-service-registrar-venta.service';

describe('ServiceRegistrarVentaService', () => {
  let service: ServiceRegistrarVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRegistrarVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
