import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoPalabrasComponent } from './banco-palabras.component';

describe('BancoPalabrasComponent', () => {
  let component: BancoPalabrasComponent;
  let fixture: ComponentFixture<BancoPalabrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoPalabrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoPalabrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
