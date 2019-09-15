import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../../models/usuario.model';

@Component({
  selector: 'registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {

  public usuario: UsuarioModel
  constructor() {
    this.usuario = new UsuarioModel('','','','','')
   }

  ngOnInit() {
  }

}
