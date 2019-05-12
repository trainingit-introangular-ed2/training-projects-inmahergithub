import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto2 } from '../../models/project2.model';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  public formfiltro: FormGroup;
  @Output() public buscaIdAPIFR = new EventEmitter<number>();
  @Input() public projectAPIFR: Proyecto2;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.construyeForm();
  }
  private construyeForm() {
    const identProyecto = 0;

    const minIdLength = 1;
    this.formfiltro = this.formBuilder.group({
      idProy: [identProyecto, [Validators.required, Validators.minLength(minIdLength), this.validateIDProyecto]]
    });
  }

  private validateIDProyecto(control: AbstractControl) {
    const id = control.value;
    let error = null;
    if (id < 0) {
      error = { ...error, negativo: 'El identificador del proyecto debe ser igual o mayor que cero' };
    }
    return error;
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formfiltro.get(controlName);
    if (control != null && control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  public buscaenAPI() {
    const idP = this.formfiltro.get('idProy').value;
    console.log('valor de idp:' + idP);
    this.buscaIdAPIFR.emit(idP);
  }
}
