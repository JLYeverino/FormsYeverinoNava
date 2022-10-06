import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-ractivo',
  templateUrl: './formulario-ractivo.component.html',
  styleUrls: ['./formulario-ractivo.component.css']
})
export class FormularioRactivoComponent implements OnInit {
  formularioUsuario: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.formularioUsuario = fb.group({
      nombre: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      apellido: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[0-9]\d*$/)]),
      edad: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.maxLength(2),Validators.minLength(2)]),
      correo: new FormControl('', [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^.*[A-Z]+.*$')]),
    });
  }

  ngOnInit(): void {
  }
  agregarUsuario(){
    const contrasena1 = this.formularioUsuario.value.contrasena;

    this.formularioUsuario.addControl('control1', new FormControl('', []));

    console.log(this.formularioUsuario);
  }
}
