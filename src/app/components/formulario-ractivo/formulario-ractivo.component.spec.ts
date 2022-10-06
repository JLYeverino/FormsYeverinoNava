import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRactivoComponent } from './formulario-ractivo.component';

describe('FormularioRactivoComponent', () => {
  let component: FormularioRactivoComponent;
  let fixture: ComponentFixture<FormularioRactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRactivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
