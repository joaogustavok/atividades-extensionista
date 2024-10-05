import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaColetaComponent } from './consulta-coleta.component';

describe('ConsultaColetaComponent', () => {
  let component: ConsultaColetaComponent;
  let fixture: ComponentFixture<ConsultaColetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaColetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultaColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
