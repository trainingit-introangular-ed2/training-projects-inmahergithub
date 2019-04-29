import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaproyectoComponent } from './fichaproyecto.component';

describe('FichaproyectoComponent', () => {
  let component: FichaproyectoComponent;
  let fixture: ComponentFixture<FichaproyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaproyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
